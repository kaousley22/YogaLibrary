



$(() => {
    let pose;
    let name;
    let type;
    let prop;
    let pic;
    let desc;
    let steps;


    //WHEN THE USER OPTS TO CREATE A ROUTINE THE SELECTED ITEMS WILL BE SET TO LOCAL STORAGE 
    let savedArray = localStorage.getItem('savedItems') ? JSON.parse(localStorage.getItem('savedItems')) : []
    localStorage.setItem('savedItems', JSON.stringify(savedArray))


    // HIDE ROUTINE COL UNTIL CREATE YOUR OWN ROUTINE LINK HAS BEEN CLICKED
    $('#routine').hide()
    $('.routine').hide()






    //ASSIGNING IMG'S NAME, AND TYPES FROM POSTURES OBJECT TO VARIABLES
    //EACH POSTURE HAS ITS OWN DIV NAME(TYPES), CARD-TITLE AND BODY, 
    //BY USING THE FOR LOOP IN LOOP I WAS ABLE TO ADD TO EACH POSE IN THE BASIC ARRAY OF OBJECTS WITH ONE STATEMENT OF CODE
    //USING STRING MANIPULATION TO REMOVE THE COMMAS FROM THE ARRAYS INSIDE OF BASIC

    for (x in basic) {
        pose = basic[x].pose;
        name = basic[x].name
        pic = basic[x].img;
        type = basic[x].type
        props = basic[x].props
        desc = basic[x].desc
        step = basic[x].steps







        //APPENDING OBJECTS IN ARRAY INTO  A CARD-COLUMN
        $('#basic').append('<div id="card' + x + '" class="card m-4 bg-secondary"></div>')
        $('#card' + x).append('<div id="card-title' + x + '" class="card-title d-inline text-center text-info"></div>')
        $('#card-title' + x).append('<h4 class="bg-light title">' + name + '</h4>')

        let $addButtons = $('<button class="btn btn-dark w-100 text-secondary addButtons" type="button">Click To Add</button>')
        $('#card-title' + x).before($addButtons)

        $addButtons.hide()

        $('#card' + x).append('<div id="card-body' + x + '" class="card-body text-center"></div>');
        $('#card-body' + x).append('<img class="card-img img-fluid rounded-circle shadow" alt="' + name + '" src="imgs/' + pic + '">')
        let $type = $('<p class="text-justify ' + pose + x + '" hidden> ' + type + '</p>')
        $('#card-body' + x).append($type)


        ///MODAL
        let $modalButton = $('<div class= "card-footer w-100 bg-dark" id=card-footer' + x + '><button class="btn mx-auto w-100 d-block text-secondary border-none modal-btn" id="' + pose + '"data-toggle="modal" data-target="#myModal" data-name="' + name + '" data-desc="DESCRIPTION:  ' + desc + '"data-step="THIS IS HOW YOU ACCOMPLISH IT:  ' + step + '" type="><span class="border-bottom">View More</span></button></div>')
        $('#card' + x).append($modalButton)


        // UPDATE THE MODALS CONTENT
        //ONE MODAL WAS CREATED IN LIBRARY.HTML THIS PLUG-IN ALLOWS ME TO DYNAMICALLY PUSH INFORMATION INTO THE MODAL BUTTON THAT IS CLICKED ON AS IT IS CLICKED ON.
        $('#myModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget)
            let typeHere = button.data('name')
            let descHere = button.data('desc')
            let stepHere = button.data('step')
            let modal = $(this)
            modal.find('.modal-title').text(typeHere)
            modal.find('.modal-body').text(descHere)
            modal.find('.modal-footer').text(stepHere)
        })



        ///////////////////////////////////////////// CREATE ROUTINE /////////////////////////////////////////////////
        //LIBRARY.HTML HAS A ROW OF 3 COLUMNS. 1ST COLUMN IS BLANK, 2ND COLUMN IS THE GALLERY OF POSES, 3RD COLUMN IS THE ROUTINE COLUN WHICH IS HIDDEN UNTIL THE CREATE LINK IS CLICKED. WHEN THE LINK IS CLICKED ON COL1 FADES OUT, AND ROUTINE FADES IN, ALLOWING THE GALLERY TO SLIDE OVER.



        //GETTING LOCAL STORAGE 
        $('#create').on('click', function () {
            let data = JSON.parse(localStorage.getItem('savedItems'))
            data.forEach(function (x) {
                $('#routine').append($('#' + x))
            })
            $('#col1').fadeOut(100)
            $('#routine').fadeIn(700)
            $('#doRoutine').fadeIn(700)
            $('#addMore').hide()
            $addButtons.show()
        })


    };

    //ADD TO ROUTINE BUTTONS SHOW UP AS THE CREATE ROUTINE LINK IS CLICKED ON
    //EACH CARD IS AN OBJECT BEING PUSHED INTO SAVEDARRAY WHENEVER SELECTED 
    $('.addButtons').each(function () {
        $(this).on('click', function () {
            let $card = $(this).parent()
            let $cardId = $(this).parent().attr('id')
            savedArray.push($cardId)
            localStorage.setItem('savedItems', JSON.stringify(savedArray))
            $('#routine').append($card)
            console.log($($cardId))
            $(this).off()
            return false;
        })
    })


    // REMOVING LOCAL STORAGE AND CARDS FROM #ROUTINE WHEN #CLEARROUTINE IS CLICKED
    $('#clearRoutine').on('click', function () {
        $('#routine').children().not('#routineBtns').fadeOut('slow')
        localStorage.clear('savedItems', JSON.stringify(savedArray))
    })


    //DO ROUTINE HIDES AND #ADDMORE FADES IN
    $('#doRoutine').on('click', function () {
        $('#basic').fadeOut('slow');
        $('#addMore').fadeIn(700)
        $('#doRoutine').fadeOut('slow')

    })


    //ADD MORE TO ROUTINE HIDES AND DO ROUTINE FADES IN
    $('#addMore').on('click', function (e) {
        e.preventDefault()
        $('#addMore').fadeOut('fast')
        $('#basic').fadeIn('slow');
        $('#doRoutine').fadeIn('slow')
    })





    // CLOSE ROUTINE
    //THE PAGES GOES BACK TO THE STARTING POINT

    $('#close').on('click', function () {
        $('#basic').fadeIn(700)
        $('#col1').toggle()
        $('#routine').hide()
        $('.addButtons').hide()
    })
    /////////////////////////////////////////////CREATE ROUTINE ENDS///////////////////////////////////////////////






    //SEARCHBAR
    //FORM VALUE IS ASSIGNED TO VARIABLE = VALUE
    // EVERYTHING APPENDED INTO BASIC ID IS BEING FILTEREED THROUGH USING THE FILTER METHOD WHICH GRABS THE KEYWORDS ENTERED INTO THE FORM
    //KEYWORDS ARE FOUND AND TOGGLED BY USING THE CLOSEST TRAVERSING METHOD WHICH PULLS THE CLOSEST DIV



    $('#input').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#basic *').filter(function () {
            $(this).toggle($(this).closest('div.card').text().toLowerCase().indexOf(value) > -1)
        });
    });


    //THE SEARCH BAR FILTER FUNCTIONING , AND LOCAL STORAGE ARE THE MEETHODS I CHOSE TO UTILIZE THAT WE HAVEN' GONE OVER EXLUSIVELY IN TRACK 1.




});




























