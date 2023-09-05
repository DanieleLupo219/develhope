import { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(
    () => list.filter((person) => person.age >= 18),
    [list]
  );

  return (
    <div>
      <ul>
        {filteredList.map((person) => (
          <li>
            {person.name}, {person.age} years old, ID: {person.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilteredList;
