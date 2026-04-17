import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { searchProducts, getAllCategories } from "@/lib/products";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = getAllCategories();
  const results = useMemo(() => {
    return searchProducts(searchQuery, selectedCategory === "All" ? undefined : selectedCategory);
  }, [searchQuery, selectedCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Search</span> Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect solution for your needs from our comprehensive product catalog
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by product name, category, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 text-base focus-visible:ring-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 hover:bg-muted rounded transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Category Filter
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-muted-foreground">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-6">
        {results.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {results.map((product) => (
              <motion.div key={product.id} variants={item}>
                <Dialog open={selectedProduct?.id === product.id} onOpenChange={() => selectedProduct?.id === product.id && setSelectedProduct(null)}>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="group glass rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer text-left h-full flex flex-col w-full"
                    >
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={product.src}
                          alt={product.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.points[0]}
                        </p>
                        <div className="mt-auto pt-4 text-primary text-sm font-medium group-hover:text-primary/80">
                          View Details →
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>

                  {/* Product Detail Modal */}
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      {/* Product Image in Modal */}
                      <div className="relative h-72 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={product.src}
                          alt={product.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Category Badge */}
                      <div>
                        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Features/Points */}
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Key Features & Details</h4>
                        <ul className="space-y-2">
                          {product.points.map((point, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-primary font-bold flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t">
                        <a
                          href="/#contact"
                          className="inline-block w-full text-center bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          Get in Touch
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No Products Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search query or category filter
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Quick Links to Other Sections */}
      <div className="container mx-auto px-6 mt-16 pt-12 border-t">
        <p className="text-center text-muted-foreground mb-6">Explore more</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/#products"
            className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-center font-medium"
          >
            View All Products
          </a>
          <a
            href="/#about"
            className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-center font-medium"
          >
            About Us
          </a>
          <a
            href="/#contact"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
