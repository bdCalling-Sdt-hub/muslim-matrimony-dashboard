/* eslint-disable no-unused-vars */
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
// import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { useCreatePrivacyPolicyMutation, useGetPrivacyPolicyQuery } from "../../../Redux/features/settingApi";

const PrivacyPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const {data, isSuccess} = useGetPrivacyPolicyQuery();
  const contentData = data?.data?.attributes?.content;
  console.log("data", data);
  useEffect(() => {
    if (contentData) {
      setContent(data.data.attributes.content);
    }
  }, [isSuccess, data]);
  const [createPrivacyPolicy] = useCreatePrivacyPolicyMutation();


  const saveContent = async () => {
    try {
      const res = await createPrivacyPolicy({content}).unwrap();
      console.log("res", res);
      if (res && res.statusCode === "201") {
        Swal.fire({
          icon: 'success',
          title: "Privacy policy updated successfully",
          showConfirmButton: true,
          timer: 1500
        })
      }
    }
    catch (err) {
      console.log("err", err)
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      })
    }
  };

  return (
    <div className="mt-5  rounded-lg">
      <div className=" overflow-y-auto max-h-[520px]">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>
      <div
        onClick={saveContent}
        className=" cursor-pointer w-full h-12 mt-5 p-2.5 bg-[#D07E2B] rounded-lg justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-white text-lg font-semibold">
          Save
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
