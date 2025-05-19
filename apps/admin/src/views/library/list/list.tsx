import ExamCard from "./exam-card";

const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 7 }).map((_, index) => (
        <ExamCard key={index} />
      ))}
    </div>
  );
};

export default List;
