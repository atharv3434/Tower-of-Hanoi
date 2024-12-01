// JavaScript Implementation of Tower of Hanoi using Recursion
document.getElementById('solve-btn').addEventListener('click', () => {
    const numDisks = 3; // Change this for more disks
    const source = 'Tower 1';
    const target = 'Tower 3';
    const auxiliary = 'Tower 2';
  
    solveTowerOfHanoi(numDisks, source, target, auxiliary);
  });
  
  // Recursive function to solve Tower of Hanoi
  function solveTowerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    // Move n-1 disks from source to auxiliary
    solveTowerOfHanoi(n - 1, source, auxiliary, target);
  
    // Move the nth disk from source to target
    console.log(`Move disk ${n} from ${source} to ${target}`);
  
    // Move n-1 disks from auxiliary to target
    solveTowerOfHanoi(n - 1, auxiliary, target, source);
  }
  