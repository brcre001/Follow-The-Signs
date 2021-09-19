import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../../styles/discussions.scss";
import Alert from "react-bootstrap/Alert";
import { DiscussionsCard } from "../component/DiscussionsCard";

export const Discussions = () => {
	const [modalShow, setModalShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { actions, store } = useContext(Context);
	const discussions = store.discussions;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [alert, setAlert] = useState(false);

	// T IS FOR Title, D IS FOR DESCRIPTION
	const sendDiscussion = () => {
		if (title == "" || description == "") {
			setAlert(true);
		} else {
			setAlert(false);
			actions.createDiscussion(title, description);
			handleClose;
		}
	};

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Discussions Board</h1>
					<p className="lead text-center text-color">
						Create, Read, Or Comment <br />A place to read discussions and chat with people.
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>

			{/* THIS IS THE CREATE BUTTON */}
			<div className="discussion-creation">
				<h2 className="discussion-article text-center">Discussions</h2>
				<Button className="ml-5" variant="primary" onClick={handleShow}>
					Create <i className="fas fa-plus" />
				</Button>
			</div>

			{/* THIS IS THE MODAL */}
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<div className="">
							<div>
								<h2 className="display-5 text-center">Create a discussion</h2>
							</div>
							<div>
								<i className="fas fa-user-circle fa-lg" />
								<span className="font-weight-lighter pl-2">{store.currentUser?.username}</span>{" "}
								{/*This is for the username while change when login */}
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <label className="lead" htmlFor="exampleFormControlTextarea1">
						Write something you want to discuss
					</label> */}
					<div>
						{alert && <Alert variant="danger">Missing Field(s)!</Alert>}
						<label>Title</label>
						<input
							placeholder="Place title here"
							onChange={event => setTitle(event.target.value)}
							value={title}
							required
						/>
						<input
							className="form-control border-0"
							id="exampleFormControlTextarea1"
							placeholder="Write a description"
							rows="3"
							required
							onChange={event => setDescription(event.target.value)}
							value={description}
						/>

						{/* <div className="d-flex justify-content-between border-top">
							<div className="mt-4">
								<p className="lead">Add to Your Post</p>
							</div>
							<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Photo/Video</Tooltip>}>
								<div className="mt-4">
									<Button className="btn mt-3">
										<i className="fas fa-images"></i>
									</Button>
								</div>
							</OverlayTrigger>
						</div> */}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-sm" variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						className="btn btn-sm"
						onClick={() => {
							sendDiscussion();
						}}
						variant="primary">
						Post Discussion
					</Button>
				</Modal.Footer>
			</Modal>

			{/* This is how the cards are made */}
			<div className="row px-5 py-3 justify-content-center">
				<div className="justify-content-center p-1">
					{/* MAPPING DISCUSSIONS FROM THE STORE*/}
					{store.discussions.map((discussion, index) => (
						<DiscussionsCard key={index} index={index} disObject={discussion} />
					))}
				</div>
			</div>
		</>
	);
};
