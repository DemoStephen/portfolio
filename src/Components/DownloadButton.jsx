import { CV } from "../UI/SVGs";

export default function DownloadButton() {
  return (
    <a
      href="//drive.google.com/file/d/1czRAExgJPsdJdFyXdNSkFw8x7ALgIoc2/view"
      download
      target="_blank"
    >
      <button
        type="submit"
        className="rounded-lg py-3 px-4 border flex items-center gap-2"
      >
        <CV /> CV
      </button>
    </a>
  );
}
