import React, {useMemo} from 'react';

const Pagination = ({change, totalPages}) => {
    const pages = useMemo(() => {
        let result = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result
    }, [totalPages])
    return (
        <div>
            { pages.map(p => {
            return (
            <button key={p} onClick={() => change(p)}>{p}</button>
            )
        })}
        </div>
    );
};

export default Pagination;