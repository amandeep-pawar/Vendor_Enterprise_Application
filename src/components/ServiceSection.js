import React from 'react';

const Services = () => (
  <section id="service" className="services pt-0">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <span>Categories</span>
        <h2>Categories</h2>
      </div>
      <div className="row gy-4">
        {[...Array(6)].map((_, i) => (
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 100 + 100}>
            <div className="card">
              <div className="card-img">
                <img src={`img/image${i + 1}.png`} alt="" className="img-fluid" />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  {categories[i]}
                </a>
              </h3>
              <p>{loremIpsum}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const categories = [
  'House Works',
  'Repairing Services',
  'Vendor',
  'Civil Engineering',
  'Fabricators',
  'Mechanic',
];

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default Services;
