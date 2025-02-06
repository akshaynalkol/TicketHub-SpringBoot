import React from "react";

const Filter = ({ filters, setFilters }) => {

  return (
    <>
      <h2 className='fw-bold my-4'>Filter</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Categories
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <button className="btn btn-danger w-100 mb-1" disabled={filters.category === "ComedyShows"}
                onClick={() => setFilters({ ...filters, category: "ComedyShows" })}>
                Comedy Shows
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.category === "Drama"}
                onClick={() => setFilters({ ...filters, category: "Drama" })}>
                Drama
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.category === "Thriller"}
                onClick={() => setFilters({ ...filters, category: "Thriller" })}>
                Thriller
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.category === "Action"}
                onClick={() => setFilters({ ...filters, category: "Action" })}>
                Action
              </button>
              <button className="btn btn-danger w-100" disabled={filters.category === "Romance"}
                onClick={() => setFilters({ ...filters, category: "Romance" })}>
                Romance
              </button>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Status
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <button className="btn btn-danger w-100 mb-1" disabled={filters.status === "Released"}
                onClick={() => setFilters({ ...filters, status: "Released" })}>
                Released
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.status === "PostProduction"}
                onClick={() => setFilters({ ...filters, status: "PostProduction" })}>
                Post Production
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.status === "InProdction"}
                onClick={() => setFilters({ ...filters, status: "InProdction" })}>
                In Production
              </button>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Rating
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <button className="btn btn-danger w-100 mb-1" disabled={filters.rating === 8}
                onClick={() => setFilters({ ...filters, rating: 8 })}>
                High Rated
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.rating === 7}
                onClick={() => setFilters({ ...filters, rating: 7 })}>
                Medium Rated
              </button>
              <button className="btn btn-danger w-100 mb-1" disabled={filters.rating === 6}
                onClick={() => setFilters({ ...filters, rating: 6 })}>
                Low Rated
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;   