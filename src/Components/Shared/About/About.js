import React from "react";

const about = () => {
	return (
		<div>
			<div className="about-container">
				<h1>
					{" "}
					<span>About</span> us{" "}
				</h1>
				<div className="abouts">
					<div className="about">
						<img src="" alt="" />
					</div>
					<div className="about">
						<div>
                                   <h2>We Take Care of your Healthy</h2>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sed earum mollitia non libero repellat magnam placeat pariatur odio inventore.</p>
                                   <button className="btn btn-sm btn-danger text-white " >
                                        learn more <i class="fas fa-angle-right"> </i>
                                   </button>
                              </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
