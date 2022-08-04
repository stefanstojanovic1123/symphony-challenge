
const CustomisableTable = ({columns, rows}) => {

    return (
        <div>
            {columns.map((column) => {
                <span>{column.label} </span>
            })}
            {rows.map((row) => {
                <div>
                    {row.render()}
                </div>
            })}
        </div>
    )
}

export default CustomisableTable;