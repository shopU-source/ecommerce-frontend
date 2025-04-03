import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

import "./categoryPanel.css";

import CategoryCollapse from "./CategoryCollapse";

function CategoryPanel({ isOpenCategoryPanel, setIsOpenCategoryPanel }) {
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h2 className="text-[16px] px-5 py-3 font-[500] flex items-center justify-between border-b-[2px]">
        Shop by categories{" "}
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h2>

      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
CategoryPanel.propTypes = {
  isOpenCategoryPanel: PropTypes.bool.isRequired,
  setIsOpenCategoryPanel: PropTypes.func.isRequired,
};

export default CategoryPanel;
