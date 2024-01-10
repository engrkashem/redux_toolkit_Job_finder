export const sortBySalary = (order, jobs) => {
  const res=jobs.slice().sort((a, b) => {
    const salaryA = parseInt(a.salary, 10);
    const salaryB = parseInt(b.salary, 10);

    if (order === "asc") return salaryA - salaryB;
    else return salaryB - salaryA;
  });
  return res
};
