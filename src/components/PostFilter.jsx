import React from 'react';
import Selection from "./UI/Selection";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Selection
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter,  sort: selectedSort})}
                options={[
                    {name: 'По названию', value: 'title'},
                    {name: 'По описанию', value: 'content'}
                ]}
            />

            <MyInput
                placeholder={'Поиск...'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </div>
    );
};

export default PostFilter;