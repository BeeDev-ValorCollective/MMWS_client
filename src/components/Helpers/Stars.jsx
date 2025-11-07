

export default function Stars({ rating = 0, outOf = 5 }) {
    return (
        <span className="stars">
            {Array.from({ length: outOf }).map((_, i) => (
                <span
                    key={i}
                    className={i < rating ? "filled" : "empty"}
                    aria-hidden="true"
                >
                    ★
                </span>
            ))}
            <span className="sr-only">{rating} of {outOf} stars</span>
        </span>
    );
}
