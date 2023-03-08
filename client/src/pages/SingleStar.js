import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import CommentModal from "./Component/CommentModal";

const SingleStar = ({ star, setStars }) => {
    const [editing, setEditing] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const refreshStars = (refresh) => {
        if (refresh) {
            setStars(null);
        }
        setEditing(null);
    };
    // Helper function to handle adding a new comment
    const handleAddComment = (comment) => {
        // Add the comment to the star object
        star.comment.push(comment);
        // Update the list of stars
        setStars(null);
        // Hide the comment modal
        setShowCommentModal(false);
    };