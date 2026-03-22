import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <h2>Your wishlist is empty</h2>;
  }

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>

      <div className="product-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>₱{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;