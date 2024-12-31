import { useState, useCallback, useEffect, useRef } from "react";
function RandomPasswordGenerator() {
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const randomPassword = useCallback(
    function () {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let pass = "";
      if (includeNum) str += "0123456789";
      if (includeChar) str += "~`!@#$%^&*(){}:;_-+=|/?><,.";

      for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length);
        pass += str[index];
      }
      setPassword(pass);
      return pass;
    },
    [length, includeNum, includeChar, setPassword]
  );
  // useRef hook
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    randomPassword();
  }, [length, includeNum, includeChar, setPassword]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 bg-black text-yellow-50 min-h-screen">
    <div className="col-span-1 flex flex-col items-center space-y-4">
      <input
        type="text"
        value={password}
        readOnly
        className="w-64 p-2 rounded border border-gray-700 bg-gray-800 text-center text-white"
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-600 px-4 py-2 text-white rounded hover:bg-blue-500 transition"
      >
        Copy
      </button>
    </div>
  
    <div className="col-span-1 md:col-span-2 bg-gray-900 w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4">
      <div className="flex flex-col items-center">
        <label htmlFor="length" className="text-lg font-medium mb-2">
          Length {length}
        </label>
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          className="w-full accent-blue-600 cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
  
      <div className="flex flex-col items-start space-y-3">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="numbers"
            className="w-4 h-4 accent-blue-600"
            defaultChecked={includeNum}
            onChange={() => {
              setIncludeNum((prev) => !prev);
            }}
          />
          <label htmlFor="numbers" className="text-sm">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="characters"
            className="w-4 h-4 accent-blue-600"
            defaultChecked={includeChar}
            onChange={() => {
              setIncludeChar((prev) => !prev);
            }}
          />
          <label htmlFor="characters" className="text-sm">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  </div>
  
  );
}
export default RandomPasswordGenerator;
