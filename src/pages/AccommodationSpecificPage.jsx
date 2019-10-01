import React from 'react';
import AccommodationSpecific from '../components/AccommodationsSpecific';
import Modal from 'react-modal';
import EnquiryContainer from "../components/EnquiryContainer";

export default class AccommodationSpesificPage extends React.Component {

    state = {
        hotelObj: null,
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost/hotel-booking/server/get-establishment.php?id=' + id)
            .then(response => {
                return response.json()
            })
            .then(result => {

                this.setState({
                    hotelObj: result
                })
            })
            .catch(error => console.error(error))
    }


    render() {

        if (!this.state.hotelObj) {
            return <div>No hotel found</div>
        }
        const { establishmentName, imageUrl, establishmentEmail, price, googleLat, googleLong, maxGuests, description } = this.state.hotelObj;

        return (
            <div className="[ wrapper ]">
                        <div className="[ col-sm-12 ] [ hotel ]">
                            <AccommodationSpecific name={establishmentName}
                                image={imageUrl}
                                description={description}
                                email={establishmentEmail}
                                price={price}
                                lat={googleLat}
                                long={googleLong}
                                max={maxGuests}
                                openModal={this.openModal}
                            />
                        </div>
                        <div>
                            <Modal className="[ makeEnquiry ]"
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                contentLabel="EnquiryModal"
                            >
                            <h1 className="[ makeEnquiry__X ]" onClick={this.closeModal}>X</h1>

                            <EnquiryContainer establishmentName={establishmentName}/>

                            </Modal>
                        </div>
            </div>
        );
    }
}
