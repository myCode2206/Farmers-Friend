import { IoAddCircleOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { sidbarrendervalue } from "../../store/atom/sidebarRender";

const CropSutablity = () => {
  const setValue = useSetRecoilState(sidbarrendervalue);
  function fun() {
    setValue("info");
  }
  return (
    <div className="d-flex flex-wrap justify-content-center mt-2">
      <button
        onClick={fun}
        className="btn btn-success d-flex align-items-center"
        style={{ gap: "0.5rem" }}
      >
        ADD DATA
        <IoAddCircleOutline size={20} />
      </button>
    </div>
  );
};

export default CropSutablity;
