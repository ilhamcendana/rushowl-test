const MinimumValue = () => {
  return (
    <main>
      <div className="container mx-auto min-h-screen flex flex-col justify-center py-20">
        <div className="grid">
          <div>
            <p className="font-bold">
              Question: Write a Typescript snippet to find out the minimum value
              of the maximum value of each nested array given the following
              structure
            </p>
            <div>
              <pre>
                <code>{`
            const values: number[][] = [
              [1,2,3,4,5],
              [3,4,5,6,7],
              [6,7,8,9,10]
            ]\n
            const answer: number = calculateMinMax(values)
            // 5            

          `}</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-bold">Answer:</p>

            <div className="w-full text-left">
              <pre>
                <code>{`
                  const values: number[][] = [
                    [1, 2, 3, 4, 5],
                    [3, 4, 5, 6, 7],
                    [6, 7, 8, 9, 10],
                  ];
                  
                  const calculateMinMax = (arrays: number[][]): number => {
                    // Calculate the maximum value for each nested  of the array and store them in array
                    const maxValues: number[] = arrays.map((arr) => Math.max(...arr));
                  
                    // Find the minimum value among the maximum values
                    const minValueOfMax = Math.min(...maxValues);
                  
                    return minValueOfMax;
                  };
                  
                  const answer: number = calculateMinMax(values);
                  
                  console.log(answer); // The output will be: 5                                    
                `}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MinimumValue;
