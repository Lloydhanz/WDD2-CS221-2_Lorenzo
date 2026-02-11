import Card from "../components/Card";
import Button from "../components/button";
import Input from "../components/Input";
import "./Login.css";
import { useState, useEffect, use } from "react";
import TextArea from "../components/TextArea";
import slugify from "slugify";

const Inventory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    slug: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState();
  const [slug, setSlug] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev_) => ({ ...prev_, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Product Page");
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  useEffect(() => {
    const generatedSlug = slugify(formData.name, {
      lower: true,
      strict: true,
    });
    setSlug(generatedSlug);
  }, [formData]);

  return (
    <Card title="Create Product">
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter product name"
          required
        />
        <Input
          label="Slug"
          type="text"
          name="slug"
          value={slug}
          onChange={handleChange}
          error={errors.slug}
          disabled
        />

        <TextArea
          label="Description"
          name="description"
          error={errors.description}
          rows={10}
          cols={40}
          value={formData.description}
        ></TextArea>

        <Input
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          error={errors.price}
        />

        <Button type="submit" loading={loading}>
          Save Produt
        </Button>
      </form>
    </Card>
  );
};
export default Inventory;
