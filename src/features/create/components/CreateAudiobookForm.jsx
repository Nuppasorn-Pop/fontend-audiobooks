import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import createValidator from "../validator/validate-create";
import audiobookApi from "../../../apis/audibook-api";
import { AxiosError } from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import { useNavigate } from "react-router-dom";
import bookImage from "../../../assets/bookImage.jpg";

const initialInput = {
  title: "",
  author: "",
  voiceActor: "",
  detail: "",
  bookType: "",
};

const initialInputError = {
  title: "",
  author: "",
  voiceActor: "",
  detail: "",
  bookType: "",
  audioFile: null,
};

export default function CreateAudiobookForm() {
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);
  const [fileImg, setFileImg] = useState(null);
  const [textError, setTextError] = useState(initialInputError);
  const [loading, setLoading] = useState(false);
  const fileElement = useRef();
  const nevigate = useNavigate();
  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileImg = (e) => {
    setFileImg(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      setTextError(() => initialInputError);
    }
  }, [file]);

  const handleSubmitCreate = async (e) => {
    try {
      e.preventDefault();
      const isErrorInput = createValidator(input);
      if (isErrorInput) {
        return setTextError(isErrorInput);
      }

      setTextError({ ...initialInputError });

      if (!file) {
        return setTextError((prev) => ({
          ...prev,
          audioFile: "Audio file is required",
        }));
      }

      const formData = new FormData();

      if (input.title) {
        formData.append("title", input.title);
      }
      if (input.author) {
        formData.append("author", input.author);
      }
      if (input.bookType) {
        formData.append("bookType", input.bookType);
      }
      if (input.voiceActor) {
        formData.append("voiceActor", input.voiceActor);
      }
      if (input.detail) {
        formData.append("detail", input.detail);
      }

      if (file) {
        formData.append("audioFile", file);
      }

      if (fileImg) {
        formData.append("bookImage", fileImg);
      }

      setLoading(true);
      await audiobookApi.create(formData);
      toast.success("create successfull");
      nevigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response.data.field === "title") {
          setTextError((prev) => ({
            ...prev,
            title: "Title already in use",
          }));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner transparent />}
      <form
        onSubmit={handleSubmitCreate}
        className="flex flex-col justify-center items-center p-4 gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="h-44 w-32 flex flex-col gap-4 ">
            <input
              type="file"
              ref={fileElement}
              hidden
              onChange={handleFileImg}
            />
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={fileImg ? URL.createObjectURL(fileImg) : bookImage}
                className="h-full w-full"
              />
            </div>
            <Button onClick={() => fileElement.current.click()}>
              Upload Image
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Input
                label="Title"
                name="title"
                value={input.name}
                onChange={handleOnChange}
                error={textError.title}
              />
            </div>
            <div>
              <Input
                label="Author"
                name="author"
                value={input.name}
                onChange={handleOnChange}
                error={textError.author}
              />
            </div>
            <div>
              <Input
                label="Book Type"
                name="bookType"
                value={input.name}
                onChange={handleOnChange}
                error={textError.bookType}
              />
            </div>
            <div>
              <Input
                label="Voice Actor"
                name="voiceActor"
                value={input.name}
                onChange={handleOnChange}
                error={textError.voiceActor}
              />
            </div>
            <div>
              <Input
                label="Audio File"
                name="audioFile"
                type="file"
                accept="audio/mp3,audio/*;capture=microphone"
                onChange={handleFile}
                error={textError.audioFile}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center h-40">
          <textarea
            className="block focus:outline-none resize-none bg-white p-4 w-3/5"
            rows={10}
            placeholder="Detail"
            name="detail"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex gap-7">
          <Button bg="green" size="w-40">
            SUBMIT
          </Button>
          <Button
            bg="black"
            size="w-40"
            type="reset"
            onClick={() => setTextError(initialInputError)}
          >
            CLEAR
          </Button>
        </div>
      </form>
    </div>
  );
}
