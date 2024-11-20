function BookCaroucel() {
    return (
        <>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body px-2">
                    <div className="d-flex justify-content-center">
                        <div id="newly_books_carousel" className="carousel slide carousel-fade w-100" data-bs-ride="carousel">
                            <div className="carousel-inner py-4">
                                {/* <?php
                                    $folderPath = '../assets/img/new_books/';
                                    $files = glob($folderPath . '/*.png');
                                    foreach ($files as $index => $file) {
                                        $filename = pathinfo($file, PATHINFO_FILENAME);
                                        $isActive = ($index == 0) ? 'active' : '';
                                        echo "<div className='carousel-item $isActive' data-bs-interval='3000'><a className='book-container' href='../pages/books.php?opac_search=$filename'><div className='book'><img src='$file' className='d-block w-100'></div></a></div>";
                                    }
                                    ?> */}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#newly_books_carousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#newly_books_carousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookCaroucel;
