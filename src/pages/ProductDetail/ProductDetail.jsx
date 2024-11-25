import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Typography } from "@mui/material";

const ProductDetail = () => {
    return (
      <>
        <Breadcrumb>
          <Link to="/home">
            Home
          </Link>
          <Typography>ProductDetail</Typography>
        </Breadcrumb>
        <div>ProductDetail</div>
      </>
    );
}

export default ProductDetail;