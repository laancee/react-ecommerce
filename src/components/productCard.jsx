import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useWishlist();

  const isFav = wishlist.some((item) => item.id === product.id);

  return (
    <div className="card h-100 shadow-sm product-card">
      <div className="product-img-wrapper">
        {product.discount && (
          <div className="sale-badge">-{product.discount}%</div>
        )}
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h6>{product.name}</h6>
          <button
            className="btn btn-sm border-0"
            onClick={() => toggleWishlist(product)}
          >
            <i
              className={`fa${isFav ? "s" : "r"} fa-heart text-danger`}
            ></i>
          </button>
        </div>

        <div className="mb-2 text-warning">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fa-star ${
                i < product.rating ? "fas" : "far"
              } fa`}
            ></i>
          ))}
        </div>

        <div className="mb-2">
          <del className="me-2">₱{product.oldPrice}</del>
          <strong className="text-danger">₱{product.price}</strong>
        </div>

        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >
          <i className="fa fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;