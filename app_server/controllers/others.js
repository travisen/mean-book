/* GET about page */
module.exports.about = function(req, res){
	res.render('generic-text', {
        title: 'About',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut condimentum lacinia felis, eget pretium urna accumsan a. Vivamus posuere nunc nunc, quis pharetra justo iaculis eget. Morbi dictum odio fermentum venenatis ultrices. Praesent luctus eros id magna laoreet, quis fringilla mi vestibulum.\n\n Aliquam tempor, nunc ac laoreet sagittis, enim tellus condimentum mauris, id vulputate ex ex nec ex. Fusce semper consectetur ligula, eget mollis est imperdiet sit amet. Integer efficitur massa tortor, iaculis accumsan mi efficitur vel. Donec placerat consectetur diam, sodales faucibus elit facilisis nec. \n\nNam fermentum, tortor quis feugiat porttitor, turpis eros laoreet nisl, quis fringilla massa libero a ipsum. Donec congue nisl id nisi venenatis, eget porttitor nisi congue. Mauris in nisi non justo maximus vehicula imperdiet ut magna. Aliquam pharetra molestie nisi. Vestibulum faucibus magna eu consectetur condimentum."
    });
};

