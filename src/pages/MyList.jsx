import AccountSideBar from "../components/AccountSideBar";
import MyListItems from "../components/MyListItems";

function MyList() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[70%]">
          <div className="scroll max-h-[500px] overflow-y-scroll overflow-x-hidden">
            <div className="shadow-md rounded-md bg-white">
              <div className="py-2 px-3 border-b border-black">
                <h2>My List</h2>
                <p className="mt-0">
                  There are <span className="font-bold text-primary">2</span>{" "}
                  products in your List
                </p>
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
                <MyListItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyList;
