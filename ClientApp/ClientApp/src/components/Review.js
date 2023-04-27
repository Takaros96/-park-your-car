import React, { Component } from 'react';

export default function Review() {

    return (
        <div class="row">
            <div class="large-12 columns">
                <h1>Reviews</h1>
                <p><a href="#" ><i class="fa fa-plus-square"></i>Add Review</a></p>
                <table id="test-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Comment</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                        <tr>
                            <td><label for=""><input type="text" name="" id="" placeholder="Id" /></label></td>
                            <td><label for=""><input type="text" name="" id="" placeholder="Comment" /></label></td>
                            <td><label for=""><input type="text" name="" id="" placeholder="Date" /></label></td>

                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Best parking area ever</td>
                            <td>2023-02-01</td>
                            <td>
                                <form action="">
                                    <button class="button"><i class="fa fa-pencil-square-o"></i></button>
                                    <button class="button"><i class="fa fa-trash-o"></i></button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Excellent</td>
                            <td>2023-01-01</td>
                            <td>
                                <form action="">
                                    <button class="button"><i class="fa fa-pencil-square-o"></i></button>
                                    <button class="button"><i class="fa fa-trash-o"></i></button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Excellent</td>
                            <td>2023-03-01</td>
                            <td>
                                <form action="">
                                    <button class="button"><i class="fa fa-pencil-square-o"></i></button>
                                    <button class="button"><i class="fa fa-trash-o"></i></button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="tiny button right">Add Review</button>
            </div>
        </div>
    );
}
