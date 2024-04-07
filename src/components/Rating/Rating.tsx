
const Rating = ({ initialRating }: any) => {

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        style={{ cursor: 'pointer', color: starValue <= initialRating ? 'gold' : 'gray' }}
                    >
                        ★
                    </span>
                );
            })}
            <div style={{ color: 'gray' , display : 'inline-block' }}>
                <span style={{ marginLeft: '10px'}}>
                    {initialRating}
                </span>
                <span>
                    {`    (${(Math.floor(Math.random() * 1000) + 1)})` + " " + "reviews"}
                </span>
            </div>
        </div>
    );
};

export default Rating;
