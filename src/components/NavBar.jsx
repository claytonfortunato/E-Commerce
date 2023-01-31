import { useSelector } from "react-redux";

import { MdLocalGroceryStore } from "react-icons/md";
import "./NavBar.scss";
import { selectProductsCount } from "../redux/cart/cart.selectors";

const NavBar = ({ click }) => {
  const productsCount = useSelector(selectProductsCount);

  return (
    <div className="nav">
      <nav className="nav-item">
        <ul className="nav-itens">
          <li className="logo">Sneakers Shopping</li>
          <li>
            <MdLocalGroceryStore size={25} onClick={click} />({productsCount})
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
