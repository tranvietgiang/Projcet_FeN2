import React, { useState } from "react";
import "./cate.css";

const CategoriesCRUD = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      description: "Electronic devices and gadgets",
    },
    {
      id: 2,
      name: "Clothing",
      description: "Apparel and fashion items",
    },
    {
      id: 3,
      name: "Books",
      description: "Books and educational materials",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories based on search term
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Category name is required");
      return;
    }

    if (editingId) {
      // Update existing category
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingId ? { ...cat, ...formData } : cat
        )
      );
    } else {
      // Create new category
      const newCategory = {
        id: Math.max(...categories.map((c) => c.id), 0) + 1,
        ...formData,
      };
      setCategories((prev) => [...prev, newCategory]);
    }

    // Reset form
    setFormData({ name: "", description: "" });
    setEditingId(null);
    setShowModal(false);
  };

  // Handle edit
  const handleEdit = (category) => {
    setFormData({
      name: category.name,
      description: category.description,
    });
    setEditingId(category.id);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  // Handle add new
  const handleAddNew = () => {
    setFormData({ name: "", description: "" });
    setEditingId(null);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", description: "" });
    setEditingId(null);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div>
        <a href="/admin-product">home</a>
      </div>
      <div className="container mt-4 fade-in-up">
        <h1 className="mb-4 header-title text-center">
          ✨ Product Categories Management ✨
        </h1>

        {/* Header with search and add button */}
        <div className="row mb-4 slide-in-left">
          <div className="col-md-8">
            <div className="search-container">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="🔍 Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  borderRadius: "25px",
                  border: "2px solid #007bff",
                  paddingLeft: "20px",
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary btn-lg w-100"
              onClick={handleAddNew}
              style={{
                borderRadius: "25px",
                background: "linear-gradient(45deg, #007bff, #6f42c1)",
                border: "none",
                fontWeight: "bold",
              }}
            >
              ➕ Add New Category
            </button>
          </div>
        </div>

        {/* Categories Table */}
        <div
          className="card bounce-in"
          style={{
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 10px 30px rgba(0,123,255,0.1)",
          }}
        >
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead
                  style={{
                    background: "linear-gradient(45deg, #007bff, #6f42c1)",
                    color: "white",
                  }}
                >
                  <tr>
                    <th style={{ borderRadius: "20px 0 0 0", padding: "20px" }}>
                      🆔 ID
                    </th>
                    <th style={{ padding: "20px" }}>📝 Name</th>
                    <th style={{ padding: "20px" }}>📄 Description</th>
                    <th style={{ borderRadius: "0 20px 0 0", padding: "20px" }}>
                      ⚡ Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCategories.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-5">
                        <div style={{ fontSize: "1.2rem", color: "#6c757d" }}>
                          🔍 No categories found
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredCategories.map((category, index) => (
                      <tr
                        key={category.id}
                        className="table-row"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <td
                          style={{
                            padding: "20px",
                            fontWeight: "bold",
                            color: "#007bff",
                          }}
                        >
                          {category.id}
                        </td>
                        <td style={{ padding: "20px", fontWeight: "600" }}>
                          {category.name}
                        </td>
                        <td style={{ padding: "20px", color: "#6c757d" }}>
                          {category.description}
                        </td>
                        <td style={{ padding: "20px" }}>
                          <button
                            className="btn btn-outline-primary btn-sm me-2"
                            onClick={() => handleEdit(category)}
                            style={{
                              borderRadius: "15px",
                              padding: "8px 15px",
                              fontWeight: "bold",
                            }}
                          >
                            ✏️ Edit
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(category.id)}
                            style={{
                              borderRadius: "15px",
                              padding: "8px 15px",
                              fontWeight: "bold",
                            }}
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal for Add/Edit */}
        {showModal && (
          <div
            className="modal show d-block"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{
                  borderRadius: "25px",
                  border: "none",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    background: "linear-gradient(45deg, #007bff, #6f42c1)",
                    color: "white",
                    borderRadius: "25px 25px 0 0",
                    padding: "25px",
                  }}
                >
                  <h5
                    className="modal-title"
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    {editingId ? "✏️ Edit Category" : "➕ Add New Category"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                    style={{
                      filter: "brightness(0) invert(1)",
                      transform: "scale(1.2)",
                    }}
                  ></button>
                </div>
                <div>
                  <div className="modal-body" style={{ padding: "30px" }}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="form-label"
                        style={{
                          fontWeight: "bold",
                          color: "#495057",
                          fontSize: "1.1rem",
                        }}
                      >
                        📝 Category Name *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #e9ecef",
                          padding: "15px 20px",
                          fontSize: "1rem",
                        }}
                        placeholder="Enter category name..."
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="form-label"
                        style={{
                          fontWeight: "bold",
                          color: "#495057",
                          fontSize: "1.1rem",
                        }}
                      >
                        📄 Description
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="description"
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #e9ecef",
                          padding: "15px 20px",
                          fontSize: "1rem",
                          resize: "none",
                        }}
                        placeholder="Enter category description..."
                      ></textarea>
                    </div>
                  </div>

                  <div
                    className="modal-footer"
                    style={{
                      padding: "25px 30px",
                      borderTop: "1px solid #e9ecef",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg me-3"
                      onClick={closeModal}
                      style={{
                        borderRadius: "20px",
                        padding: "12px 30px",
                        fontWeight: "bold",
                      }}
                    >
                      ❌ Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                      style={{
                        borderRadius: "20px",
                        padding: "12px 30px",
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #007bff, #6f42c1)",
                        border: "none",
                      }}
                    >
                      {editingId ? "💾 Update" : "✨ Create"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default CategoriesCRUD;
