import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";

import "./categoryPanel.css";

import CategoryCollapse from "./CategoryCollapse";

function CategoryPanel(props) {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategoryPanel(newOpen);
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
      {props?.data?.length !== 0 && <CategoryCollapse data={props.data} />}
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;
