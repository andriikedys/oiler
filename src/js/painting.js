/**
 * Created by -------------------- on 06.03.2017.
 */

    //=include lib/jquery.min.js
    var container = $('.js-datail-container');
    var jsonText = $('[data-typeID="json"]');

    var items = JSON.parse(jsonText.html());
    $(document).ready(function(){
        //=include components/datail.js
    });
    //=include components/btnMore.js






