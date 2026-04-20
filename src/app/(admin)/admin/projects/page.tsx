'use client';

import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  technologies: string;
  duration: string;
  videoUrl: string;
  imageUrl: string;
};

const dummyData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Landing Page',
    description: 'Modern UI landing page for online store',
    category: 'Landing Page',
    price: '$120',
    technologies: 'Next.js, Tailwind, TypeScript',
    duration: '3 Days',
    videoUrl: 'https://youtube.com/demo1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio website design',
    category: 'Portfolio',
    price: '$80',
    technologies: 'React, Tailwind',
    duration: '2 Days',
    videoUrl: 'https://youtube.com/demo2',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(dummyData);
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [form, setForm] = useState<Project>({
    id: 0,
    title: '',
    description: '',
    category: '',
    price: '',
    technologies: '',
    duration: '',
    videoUrl: '',
    imageUrl: '',
  });

  // OPEN ADD
  const openAdd = () => {
    setForm({
      id: 0,
      title: '',
      description: '',
      category: '',
      price: '',
      technologies: '',
      duration: '',
      videoUrl: '',
      imageUrl: '',
    });
    setEditId(null);
    setIsOpen(true);
  };

  // OPEN EDIT
  const openEdit = (project: Project) => {
    setForm(project);
    setEditId(project.id);
    setIsOpen(true);
  };

  // SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId !== null) {
      setProjects(prev => prev.map(p => (p.id === editId ? form : p)));
    } else {
      setProjects(prev => [...prev, { ...form, id: Date.now() }]);
    }

    setIsOpen(false);
  };

  // DELETE
  const handleDelete = (id: number) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button
          onClick={openAdd}
          className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg"
        >
          + Add Project
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-gray-50 dark:bg-gray-900">
        <table className="w-full border rounded-lg">
          <thead className="">
            <tr className="border-b text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Tech</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map(p => (
              <tr key={p.id} className="border-b ">
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.price}</td>
                <td className="p-3">{p.technologies}</td>
                <td className="p-3">{p.duration}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => openEdit(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL FORM */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[500px] p-6 rounded-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editId ? 'Update Project' : 'Add Project'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                placeholder="Title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Category"
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Price"
                value={form.price}
                onChange={e => setForm({ ...form, price: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Technologies"
                value={form.technologies}
                onChange={e =>
                  setForm({ ...form, technologies: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Duration"
                value={form.duration}
                onChange={e => setForm({ ...form, duration: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Video URL"
                value={form.videoUrl}
                onChange={e => setForm({ ...form, videoUrl: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Image URL"
                value={form.imageUrl}
                onChange={e => setForm({ ...form, imageUrl: e.target.value })}
                className="w-full border p-2 rounded"
              />

              <textarea
                placeholder="Description"
                value={form.description}
                onChange={e =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              {/* BUTTONS */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF6B35] text-white rounded"
                >
                  {editId ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
