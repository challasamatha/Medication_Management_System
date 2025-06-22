const Greeting = () => {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  return <h2 className="text-2xl font-bold mb-4">{greet} 👋</h2>;
};
export default Greeting;




