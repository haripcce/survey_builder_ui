/* eslint-disable react/prefer-stateless-function,no-unused-vars,react/prop-types,jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from "moment";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";
import { userLoggingOut } from "../../actions/auth";
import { setLocale } from "../../actions/locale";
import "../../scss/datatable.scss";


class SurveysTable extends React.Component {
    render() {
        const { isConfirmed, isAuthenticated, logout } = this.props;
        const products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];
        const selectRowProp = {
            mode: 'checkbox'
        };
        const currPage = 1;
        const options = {
            sizePerPageList: [ 5, 10, 15, 20 ],
            sizePerPage: 10,
            page: currPage,
            sortName: 'id',
            sortOrder: 'desc'
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 sarvey-search text-right">
                        <input type="text" title="search" placeholder="search"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 sarve-btn text-right">
                        <button className="btn btn-default"> Create New Surve</button>
                        <button className="btn btn-default no-margin-right"> Survey Template</button>
                    </div>
                </div>
                <div className="row table-sarve">
                    <div className="col-xs-12 col-md-12 col-lg-12 no-padding">
                        <BootstrapTable data={products} striped hover version='4'
                                        search="true" selectRow={ selectRowProp } pagination="true" options="options">
                            <TableHeaderColumn isKey dataField='id' dataSort="true">Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataSort="true">Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='price' dataSort="true">Product Price</TableHeaderColumn>
                        </BootstrapTable>,
                    </div>
                </div>

            </div>

        );
    }
}

SurveysTable.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    isAuthenticated:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        isAuthenticated: !!state.user.token,
        setLocale: PropTypes.func.isRequired
    };
}

export default connect(mapStateToProps, {logout:userLoggingOut, setLocale},  null,{pure: false})(SurveysTable);
