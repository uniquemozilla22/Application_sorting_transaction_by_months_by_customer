import classes from "./Table.module.css";
export const TableComponent = ({ data }) => {
  const heads = Object.keys(data[0]);

  return (
    <table className={classes.table}>
      <tr classname={classes.tablerow}>
        {heads.map((head, index) => (
          <th classname={classes.tablerow} key={index}>
            {head}
          </th>
        ))}
      </tr>
      {data.map((contents, index) => {
        console.log(contents);
        return (
          <tr key={index}>
            {Object.keys(contents).map((element, index) => {
              return (
                <td classname={classes.tablerow} key={index}>
                  {contents[element].toLocaleString()}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};
