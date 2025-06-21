"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, Timestamp, query, orderBy } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaNewspaper, FaImage, FaVideo, FaSave, FaTimes, FaUpload } from "react-icons/fa";

const ADMIN_EMAIL = "lucifer.the.gamer.001@gmail.com"; // CHANGE THIS TO YOUR ADMIN EMAIL

// Cloudinary configuration
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dyevpfv8a/image/upload";
const CLOUDINARY_PRESET = "grain_community";

export default function DashboardPage() {
  const [news, setNews] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editMediaFiles, setEditMediaFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user || user.email !== ADMIN_EMAIL) {
        router.push("/");
      }
    });
    return () => unsub();
  }, [router]);

  const fetchNews = async () => {
    setLoading(true);
    const q = query(collection(db, "news"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    setNews(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles(Array.from(e.target.files));
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    const response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    let media: any[] = [];
    
    for (const file of mediaFiles) {
      try {
        const url = await uploadToCloudinary(file);
        const type = file.type.startsWith("image") ? "image" : file.type.startsWith("video") ? "video" : "other";
        media.push({ type, url });
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
    
    await addDoc(collection(db, "news"), { title, content, date: Timestamp.now(), media });
    setTitle(""); setContent(""); setMediaFiles([]);
    setUploading(false);
    setShowForm(false);
    fetchNews();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;
    setUploading(true);
    let media: any[] = [];
    
    for (const file of editMediaFiles) {
      try {
        const url = await uploadToCloudinary(file);
        const type = file.type.startsWith("image") ? "image" : file.type.startsWith("video") ? "video" : "other";
        media.push({ type, url });
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
    
    // Merge with existing media
    const newsItem = news.find(n => n.id === editId);
    const existingMedia = newsItem?.media || [];
    await updateDoc(doc(db, "news", editId), { title: editTitle, content: editContent, media: [...existingMedia, ...media] });
    setEditId(null); setEditTitle(""); setEditContent(""); setEditMediaFiles([]);
    setUploading(false);
    fetchNews();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      await deleteDoc(doc(db, "news", id));
      fetchNews();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FaNewspaper className="text-3xl mr-3" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">News Dashboard</h1>
              <p className="text-sm opacity-90">Manage your news content</p>
            </div>
          </div>
          <button 
            onClick={() => { signOut(auth); router.push("/login"); }} 
            className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
        {/* Add News Button */}
        {!showForm && (
          <div className="mb-8">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 flex items-center"
            >
              <FaPlus className="mr-2" />
              Add New Article
            </button>
          </div>
        )}

        {/* Add News Form */}
        {showForm && (
          <div className="mb-8 bg-white rounded-xl shadow-lg p-6 animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add New Article</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            <form onSubmit={handleAdd} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Title
                </label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter article title..."
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Content
                </label>
                <textarea
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  placeholder="Write your article content here..."
                  required
                  rows={8}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-y text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Media Files (Images/Videos)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition duration-200">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleMediaChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition duration-200 flex items-center mx-auto"
                  >
                    <FaUpload className="mr-2" />
                    Choose Files
                  </button>
                  <p className="text-sm text-gray-500 mt-2">Drag and drop files here or click to browse</p>
                </div>
              </div>

              {/* Media Preview */}
              {mediaFiles.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Media Preview
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {mediaFiles.map((file, idx) => (
                      <div key={idx} className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                        {file.type.startsWith("image") ? (
                          <img src={URL.createObjectURL(file)} alt="preview" className="object-cover w-full h-full" />
                        ) : file.type.startsWith("video") ? (
                          <video src={URL.createObjectURL(file)} className="object-cover w-full h-full" controls />
                        ) : null}
                        <button
                          type="button"
                          onClick={() => setMediaFiles(mediaFiles.filter((_, i) => i !== idx))}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <FaSave className="mr-2" />
                      Publish Article
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* News Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading news...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                {/* Media Gallery */}
                {item.media && item.media.length > 0 && (
                  <div className="h-48 overflow-hidden">
                    <div className="flex overflow-x-auto">
                      {item.media.map((m: any, idx: number) => (
                        <div key={idx} className="flex-shrink-0 w-full h-48">
                          {m.type === "image" ? (
                            <img src={m.url} alt="media" className="object-cover w-full h-full" />
                          ) : m.type === "video" ? (
                            <video src={m.url} className="object-cover w-full h-full" controls />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {editId === item.id ? (
                    <form onSubmit={handleEdit} className="space-y-4">
                      <input
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary"
                      />
                      <textarea
                        value={editContent}
                        onChange={e => setEditContent(e.target.value)}
                        required
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary resize-y"
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded p-3 text-center">
                        <input
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          onChange={e => setEditMediaFiles(e.target.files ? Array.from(e.target.files) : [])}
                          ref={editFileInputRef}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => editFileInputRef.current?.click()}
                          className="text-primary hover:text-primary-dark text-sm"
                        >
                          <FaUpload className="mr-1" />
                          Add More Media
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center">
                          <FaSave className="mr-1" />
                          Save
                        </button>
                        <button type="button" onClick={() => setEditId(null)} className="bg-gray-300 px-3 py-1 rounded text-sm">
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => { setEditId(item.id); setEditTitle(item.title); setEditContent(item.content); }} 
                          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm flex items-center hover:bg-yellow-600 transition duration-200"
                        >
                          <FaEdit className="mr-1" />
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)} 
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center hover:bg-red-600 transition duration-200"
                        >
                          <FaTrash className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && news.length === 0 && (
          <div className="text-center py-12">
            <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No News Articles Yet</h3>
            <p className="text-gray-500">Start by adding your first news article!</p>
          </div>
        )}
      </div>
    </div>
  );
} 