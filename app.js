    console.log("page loaded");

    function getPokemon() {
        $.get("pokemon/", (data) => {
                $.each(data, function(index, val) {
                    $("#content").append(`<div>${index + 1} ${val.name}</div>`);
                });
            })
            .done(() => {
                console.log("done");
            })
            .fail((err) => {
                console.log(err);
            });
    }

    function getOnePokemon() {
        $.get("pokemon/1", (data) => {
                $("#content").append(`<div>${index + 1} ${data.name}</div>`);
            })
            .done(() => {
                console.log("done");
            })
            .fail((err) => {
                console.log(err);
            });
    }

    function createPokemon() {
        let newPokemon = { "name": "Mew" };
        $.post("pokemon", newPokemon, (data) => {
            console.log(data);
        });
    }

    function updatePokemon() {
        $.ajax({
            type: "PUT",
            dataType: "json",
            data: { "name": "Bulba" },
            url: "pokemon/1",
            success: function(data) {
                alert(data);
            }
        });
    }

    function deletePokemon() {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "pokemon/1",
            success: function(data) {
                alert(data);
            }
        });
    }