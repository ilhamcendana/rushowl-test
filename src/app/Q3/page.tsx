const DiffReact = () => {
  return (
    <main>
      <div className="container mx-auto min-h-screen flex flex-col justify-center gap-12">
        <p className="font-bold">
          Question: Explain the main difference of React and React Native during
          runtime.
        </p>

        <div>
          <p className="font-bold">Answer:</p>
          <ul className="list-disc pl-4">
            <li>
              <strong>React</strong> is used for{" "}
              <strong>building web applications</strong>. It creates user
              interfaces in web browsers using HTML, CSS, and JavaScript.
            </li>
            <li>
              <strong>React Native</strong> is used for{" "}
              <strong>building mobile applications</strong>. It creates native
              mobile apps using the same React principles but renders components
              using native UI components instead of web components. And it's{" "}
              <strong>
                bridging from javascript code to the java/kotlin or
                objective-c/swift
              </strong>{" "}
              code so it can runs on each OS
            </li>
          </ul>
          <p className="mt-8">
            That's why if we learn React JS, we can do both web development and
            mobile app development, but in the{" "}
            <strong>different environtment and runtime</strong>, might need an
            adjustment for the specific environment area
          </p>
        </div>
      </div>
    </main>
  );
};

export default DiffReact;
