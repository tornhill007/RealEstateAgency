function intersect(left, right) {
    return left.filter(function(el){
        return right.indexOf(el) !== -1;
    }).length !== 0;
}
export default intersect;