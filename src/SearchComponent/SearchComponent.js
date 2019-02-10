import React, { Component } from 'react';
import ListComponent from './ListComponent/ListComponent';
import SearchInputComponent from './SearchInputComponent/SearchInputTextBox';
const jsonData = require('../search-list.json');

export default class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: jsonData,
            searchKeyword: '',
            searchData: [],
            searchButtonClicked: false,
            showLoader: false
        }
    }


    onSearchInputChangeHandler = (event) => {
        let tempKeywordSearch = event.target.value;
        this.setState({
            searchKeyword: tempKeywordSearch
        });
    }

    onSearchKeywordButtonClickHandler = async () => {
        this.setState({
            searchButtonClicked: true,
            showLoader: true
        });

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Time out completed")}, 3000);
        });

        await promise;

        const jsonData = [...this.state.data];

        if (this.state.searchKeyword) {
            const searchKeyword = this.state.searchKeyword.toLowerCase();
            let tempData = [];
            tempData = jsonData.filter(el => el._id.toString().toLowerCase().includes(searchKeyword) || el.name.toString().toLowerCase().includes(searchKeyword) || el.gender.toString().toLowerCase() === searchKeyword);

            this.setState({
                searchData: tempData,
                showLoader: false
            });
        }
        else{
            this.setState({
                searchData : jsonData,
                showLoader: false
            });
        }

    }


    render() {
        const showFetching = this.state.showLoader ? <div><h2>Fetching Data</h2></div> : null;


        return (
            <div className="container">
                <h2>SEARCH COMPONENT</h2>
                <SearchInputComponent
                    onSerachInputChange={this.onSearchInputChangeHandler}
                    searchText={this.state.searchKeyword}
                    onSearchButtonClickHandler={this.onSearchKeywordButtonClickHandler}
                />
                {
                    this.state.showLoader ? showFetching : <ListComponent
                        data={this.state.searchButtonClicked ? this.state.searchData : this.state.data}
                    />
                }

            </div>
        );
    }
};


