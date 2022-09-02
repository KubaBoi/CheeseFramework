
// CUSTOM.JS

function changeWelcome() {
    var docDiv = document.getElementById("documentationId");
    if (docDiv == null) return;
    var str = `
        <h2 id="documentation">Documentation</h2>
        Yeeey you are here :heart_eyes: 
        <br>That's amazing, thank you. All source codes for this .md to .html converter
        are <a href="https://github.com/KubaBoi/CheeseFramework/tree/webServices/mdConverter">here</a>.<br>
        <br>
        <a href="https://kubaboi.github.io/CheeseFramework/doc.html" target="_blank">Complete method and classes documentation</a>
    `;

    docDiv.innerHTML = rplcReg(str, /:(?<emoji>[a-z0-9_\-\+]+):/g, "$emoji.emoji$");
}


// EMOJIS.JS
/**
 * credit https://github.com/privatenumber/gh-emojis
 */
const EMOJIS = {
    "+1": "https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8",
    "-1": "https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8",
    "100": "https://github.githubassets.com/images/icons/emoji/unicode/1f4af.png?v8",
    "1234": "https://github.githubassets.com/images/icons/emoji/unicode/1f522.png?v8",
    "1st_place_medal": "https://github.githubassets.com/images/icons/emoji/unicode/1f947.png?v8",
    "2nd_place_medal": "https://github.githubassets.com/images/icons/emoji/unicode/1f948.png?v8",
    "3rd_place_medal": "https://github.githubassets.com/images/icons/emoji/unicode/1f949.png?v8",
    "8ball": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b1.png?v8",
    "a": "https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8",
    "ab": "https://github.githubassets.com/images/icons/emoji/unicode/1f18e.png?v8",
    "abacus": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ee.png?v8",
    "abc": "https://github.githubassets.com/images/icons/emoji/unicode/1f524.png?v8",
    "abcd": "https://github.githubassets.com/images/icons/emoji/unicode/1f521.png?v8",
    "accept": "https://github.githubassets.com/images/icons/emoji/unicode/1f251.png?v8",
    "adhesive_bandage": "https://github.githubassets.com/images/icons/emoji/unicode/1fa79.png?v8",
    "adult": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1.png?v8",
    "aerial_tramway": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a1.png?v8",
    "afghanistan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v8",
    "airplane": "https://github.githubassets.com/images/icons/emoji/unicode/2708.png?v8",
    "aland_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v8",
    "alarm_clock": "https://github.githubassets.com/images/icons/emoji/unicode/23f0.png?v8",
    "albania": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f1.png?v8",
    "alembic": "https://github.githubassets.com/images/icons/emoji/unicode/2697.png?v8",
    "algeria": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ff.png?v8",
    "alien": "https://github.githubassets.com/images/icons/emoji/unicode/1f47d.png?v8",
    "ambulance": "https://github.githubassets.com/images/icons/emoji/unicode/1f691.png?v8",
    "american_samoa": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f8.png?v8",
    "amphora": "https://github.githubassets.com/images/icons/emoji/unicode/1f3fa.png?v8",
    "anchor": "https://github.githubassets.com/images/icons/emoji/unicode/2693.png?v8",
    "andorra": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e9.png?v8",
    "angel": "https://github.githubassets.com/images/icons/emoji/unicode/1f47c.png?v8",
    "anger": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a2.png?v8",
    "angola": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f4.png?v8",
    "angry": "https://github.githubassets.com/images/icons/emoji/unicode/1f620.png?v8",
    "anguilla": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ee.png?v8",
    "anguished": "https://github.githubassets.com/images/icons/emoji/unicode/1f627.png?v8",
    "ant": "https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8",
    "antarctica": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f6.png?v8",
    "antigua_barbuda": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ec.png?v8",
    "apple": "https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png?v8",
    "aquarius": "https://github.githubassets.com/images/icons/emoji/unicode/2652.png?v8",
    "argentina": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f7.png?v8",
    "aries": "https://github.githubassets.com/images/icons/emoji/unicode/2648.png?v8",
    "armenia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f2.png?v8",
    "arrow_backward": "https://github.githubassets.com/images/icons/emoji/unicode/25c0.png?v8",
    "arrow_double_down": "https://github.githubassets.com/images/icons/emoji/unicode/23ec.png?v8",
    "arrow_double_up": "https://github.githubassets.com/images/icons/emoji/unicode/23eb.png?v8",
    "arrow_down": "https://github.githubassets.com/images/icons/emoji/unicode/2b07.png?v8",
    "arrow_down_small": "https://github.githubassets.com/images/icons/emoji/unicode/1f53d.png?v8",
    "arrow_forward": "https://github.githubassets.com/images/icons/emoji/unicode/25b6.png?v8",
    "arrow_heading_down": "https://github.githubassets.com/images/icons/emoji/unicode/2935.png?v8",
    "arrow_heading_up": "https://github.githubassets.com/images/icons/emoji/unicode/2934.png?v8",
    "arrow_left": "https://github.githubassets.com/images/icons/emoji/unicode/2b05.png?v8",
    "arrow_lower_left": "https://github.githubassets.com/images/icons/emoji/unicode/2199.png?v8",
    "arrow_lower_right": "https://github.githubassets.com/images/icons/emoji/unicode/2198.png?v8",
    "arrow_right": "https://github.githubassets.com/images/icons/emoji/unicode/27a1.png?v8",
    "arrow_right_hook": "https://github.githubassets.com/images/icons/emoji/unicode/21aa.png?v8",
    "arrow_up": "https://github.githubassets.com/images/icons/emoji/unicode/2b06.png?v8",
    "arrow_up_down": "https://github.githubassets.com/images/icons/emoji/unicode/2195.png?v8",
    "arrow_up_small": "https://github.githubassets.com/images/icons/emoji/unicode/1f53c.png?v8",
    "arrow_upper_left": "https://github.githubassets.com/images/icons/emoji/unicode/2196.png?v8",
    "arrow_upper_right": "https://github.githubassets.com/images/icons/emoji/unicode/2197.png?v8",
    "arrows_clockwise": "https://github.githubassets.com/images/icons/emoji/unicode/1f503.png?v8",
    "arrows_counterclockwise": "https://github.githubassets.com/images/icons/emoji/unicode/1f504.png?v8",
    "art": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png?v8",
    "articulated_lorry": "https://github.githubassets.com/images/icons/emoji/unicode/1f69b.png?v8",
    "artificial_satellite": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f0.png?v8",
    "artist": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3a8.png?v8",
    "aruba": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fc.png?v8",
    "ascension_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e8.png?v8",
    "asterisk": "https://github.githubassets.com/images/icons/emoji/unicode/002a-20e3.png?v8",
    "astonished": "https://github.githubassets.com/images/icons/emoji/unicode/1f632.png?v8",
    "astronaut": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f680.png?v8",
    "athletic_shoe": "https://github.githubassets.com/images/icons/emoji/unicode/1f45f.png?v8",
    "atm": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e7.png?v8",
    "atom": "https://github.githubassets.com/images/icons/emoji/atom.png?v8",
    "atom_symbol": "https://github.githubassets.com/images/icons/emoji/unicode/269b.png?v8",
    "australia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fa.png?v8",
    "austria": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f9.png?v8",
    "auto_rickshaw": "https://github.githubassets.com/images/icons/emoji/unicode/1f6fa.png?v8",
    "avocado": "https://github.githubassets.com/images/icons/emoji/unicode/1f951.png?v8",
    "axe": "https://github.githubassets.com/images/icons/emoji/unicode/1fa93.png?v8",
    "azerbaijan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ff.png?v8",
    "b": "https://github.githubassets.com/images/icons/emoji/unicode/1f171.png?v8",
    "baby": "https://github.githubassets.com/images/icons/emoji/unicode/1f476.png?v8",
    "baby_bottle": "https://github.githubassets.com/images/icons/emoji/unicode/1f37c.png?v8",
    "baby_chick": "https://github.githubassets.com/images/icons/emoji/unicode/1f424.png?v8",
    "baby_symbol": "https://github.githubassets.com/images/icons/emoji/unicode/1f6bc.png?v8",
    "back": "https://github.githubassets.com/images/icons/emoji/unicode/1f519.png?v8",
    "bacon": "https://github.githubassets.com/images/icons/emoji/unicode/1f953.png?v8",
    "badger": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a1.png?v8",
    "badminton": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f8.png?v8",
    "bagel": "https://github.githubassets.com/images/icons/emoji/unicode/1f96f.png?v8",
    "baggage_claim": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c4.png?v8",
    "baguette_bread": "https://github.githubassets.com/images/icons/emoji/unicode/1f956.png?v8",
    "bahamas": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f8.png?v8",
    "bahrain": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ed.png?v8",
    "balance_scale": "https://github.githubassets.com/images/icons/emoji/unicode/2696.png?v8",
    "bald_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b2.png?v8",
    "bald_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b2.png?v8",
    "ballet_shoes": "https://github.githubassets.com/images/icons/emoji/unicode/1fa70.png?v8",
    "balloon": "https://github.githubassets.com/images/icons/emoji/unicode/1f388.png?v8",
    "ballot_box": "https://github.githubassets.com/images/icons/emoji/unicode/1f5f3.png?v8",
    "ballot_box_with_check": "https://github.githubassets.com/images/icons/emoji/unicode/2611.png?v8",
    "bamboo": "https://github.githubassets.com/images/icons/emoji/unicode/1f38d.png?v8",
    "banana": "https://github.githubassets.com/images/icons/emoji/unicode/1f34c.png?v8",
    "bangbang": "https://github.githubassets.com/images/icons/emoji/unicode/203c.png?v8",
    "bangladesh": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e9.png?v8",
    "banjo": "https://github.githubassets.com/images/icons/emoji/unicode/1fa95.png?v8",
    "bank": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e6.png?v8",
    "bar_chart": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ca.png?v8",
    "barbados": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e7.png?v8",
    "barber": "https://github.githubassets.com/images/icons/emoji/unicode/1f488.png?v8",
    "baseball": "https://github.githubassets.com/images/icons/emoji/unicode/26be.png?v8",
    "basecamp": "https://github.githubassets.com/images/icons/emoji/basecamp.png?v8",
    "basecampy": "https://github.githubassets.com/images/icons/emoji/basecampy.png?v8",
    "basket": "https://github.githubassets.com/images/icons/emoji/unicode/1f9fa.png?v8",
    "basketball": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c0.png?v8",
    "basketball_man": "https://github.githubassets.com/images/icons/emoji/unicode/26f9-2642.png?v8",
    "basketball_woman": "https://github.githubassets.com/images/icons/emoji/unicode/26f9-2640.png?v8",
    "bat": "https://github.githubassets.com/images/icons/emoji/unicode/1f987.png?v8",
    "bath": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c0.png?v8",
    "bathtub": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c1.png?v8",
    "battery": "https://github.githubassets.com/images/icons/emoji/unicode/1f50b.png?v8",
    "beach_umbrella": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d6.png?v8",
    "bear": "https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png?v8",
    "bearded_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d4.png?v8",
    "bed": "https://github.githubassets.com/images/icons/emoji/unicode/1f6cf.png?v8",
    "bee": "https://github.githubassets.com/images/icons/emoji/unicode/1f41d.png?v8",
    "beer": "https://github.githubassets.com/images/icons/emoji/unicode/1f37a.png?v8",
    "beers": "https://github.githubassets.com/images/icons/emoji/unicode/1f37b.png?v8",
    "beetle": "https://github.githubassets.com/images/icons/emoji/unicode/1f41e.png?v8",
    "beginner": "https://github.githubassets.com/images/icons/emoji/unicode/1f530.png?v8",
    "belarus": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fe.png?v8",
    "belgium": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ea.png?v8",
    "belize": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ff.png?v8",
    "bell": "https://github.githubassets.com/images/icons/emoji/unicode/1f514.png?v8",
    "bellhop_bell": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ce.png?v8",
    "benin": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ef.png?v8",
    "bento": "https://github.githubassets.com/images/icons/emoji/unicode/1f371.png?v8",
    "bermuda": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f2.png?v8",
    "beverage_box": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c3.png?v8",
    "bhutan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f9.png?v8",
    "bicyclist": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b4.png?v8",
    "bike": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b2.png?v8",
    "biking_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2642.png?v8",
    "biking_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2640.png?v8",
    "bikini": "https://github.githubassets.com/images/icons/emoji/unicode/1f459.png?v8",
    "billed_cap": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e2.png?v8",
    "biohazard": "https://github.githubassets.com/images/icons/emoji/unicode/2623.png?v8",
    "bird": "https://github.githubassets.com/images/icons/emoji/unicode/1f426.png?v8",
    "birthday": "https://github.githubassets.com/images/icons/emoji/unicode/1f382.png?v8",
    "black_circle": "https://github.githubassets.com/images/icons/emoji/unicode/26ab.png?v8",
    "black_flag": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f4.png?v8",
    "black_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f5a4.png?v8",
    "black_joker": "https://github.githubassets.com/images/icons/emoji/unicode/1f0cf.png?v8",
    "black_large_square": "https://github.githubassets.com/images/icons/emoji/unicode/2b1b.png?v8",
    "black_medium_small_square": "https://github.githubassets.com/images/icons/emoji/unicode/25fe.png?v8",
    "black_medium_square": "https://github.githubassets.com/images/icons/emoji/unicode/25fc.png?v8",
    "black_nib": "https://github.githubassets.com/images/icons/emoji/unicode/2712.png?v8",
    "black_small_square": "https://github.githubassets.com/images/icons/emoji/unicode/25aa.png?v8",
    "black_square_button": "https://github.githubassets.com/images/icons/emoji/unicode/1f532.png?v8",
    "blond_haired_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f471-2642.png?v8",
    "blond_haired_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f471.png?v8",
    "blond_haired_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f471-2640.png?v8",
    "blonde_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f471-2640.png?v8",
    "blossom": "https://github.githubassets.com/images/icons/emoji/unicode/1f33c.png?v8",
    "blowfish": "https://github.githubassets.com/images/icons/emoji/unicode/1f421.png?v8",
    "blue_book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d8.png?v8",
    "blue_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f699.png?v8",
    "blue_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f499.png?v8",
    "blue_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e6.png?v8",
    "blush": "https://github.githubassets.com/images/icons/emoji/unicode/1f60a.png?v8",
    "boar": "https://github.githubassets.com/images/icons/emoji/unicode/1f417.png?v8",
    "boat": "https://github.githubassets.com/images/icons/emoji/unicode/26f5.png?v8",
    "bolivia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f4.png?v8",
    "bomb": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a3.png?v8",
    "bone": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b4.png?v8",
    "book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png?v8",
    "bookmark": "https://github.githubassets.com/images/icons/emoji/unicode/1f516.png?v8",
    "bookmark_tabs": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d1.png?v8",
    "books": "https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png?v8",
    "boom": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a5.png?v8",
    "boot": "https://github.githubassets.com/images/icons/emoji/unicode/1f462.png?v8",
    "bosnia_herzegovina": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e6.png?v8",
    "botswana": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fc.png?v8",
    "bouncing_ball_man": "https://github.githubassets.com/images/icons/emoji/unicode/26f9-2642.png?v8",
    "bouncing_ball_person": "https://github.githubassets.com/images/icons/emoji/unicode/26f9.png?v8",
    "bouncing_ball_woman": "https://github.githubassets.com/images/icons/emoji/unicode/26f9-2640.png?v8",
    "bouquet": "https://github.githubassets.com/images/icons/emoji/unicode/1f490.png?v8",
    "bouvet_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fb.png?v8",
    "bow": "https://github.githubassets.com/images/icons/emoji/unicode/1f647.png?v8",
    "bow_and_arrow": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f9.png?v8",
    "bowing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f647-2642.png?v8",
    "bowing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f647-2640.png?v8",
    "bowl_with_spoon": "https://github.githubassets.com/images/icons/emoji/unicode/1f963.png?v8",
    "bowling": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b3.png?v8",
    "bowtie": "https://github.githubassets.com/images/icons/emoji/bowtie.png?v8",
    "boxing_glove": "https://github.githubassets.com/images/icons/emoji/unicode/1f94a.png?v8",
    "boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f466.png?v8",
    "brain": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e0.png?v8",
    "brazil": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f7.png?v8",
    "bread": "https://github.githubassets.com/images/icons/emoji/unicode/1f35e.png?v8",
    "breast_feeding": "https://github.githubassets.com/images/icons/emoji/unicode/1f931.png?v8",
    "bricks": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f1.png?v8",
    "bride_with_veil": "https://github.githubassets.com/images/icons/emoji/unicode/1f470.png?v8",
    "bridge_at_night": "https://github.githubassets.com/images/icons/emoji/unicode/1f309.png?v8",
    "briefcase": "https://github.githubassets.com/images/icons/emoji/unicode/1f4bc.png?v8",
    "british_indian_ocean_territory": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f4.png?v8",
    "british_virgin_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ec.png?v8",
    "broccoli": "https://github.githubassets.com/images/icons/emoji/unicode/1f966.png?v8",
    "broken_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f494.png?v8",
    "broom": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f9.png?v8",
    "brown_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e4.png?v8",
    "brown_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f90e.png?v8",
    "brown_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7eb.png?v8",
    "brunei": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f3.png?v8",
    "bug": "https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png?v8",
    "building_construction": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d7.png?v8",
    "bulb": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png?v8",
    "bulgaria": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ec.png?v8",
    "bullettrain_front": "https://github.githubassets.com/images/icons/emoji/unicode/1f685.png?v8",
    "bullettrain_side": "https://github.githubassets.com/images/icons/emoji/unicode/1f684.png?v8",
    "burkina_faso": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1eb.png?v8",
    "burrito": "https://github.githubassets.com/images/icons/emoji/unicode/1f32f.png?v8",
    "burundi": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ee.png?v8",
    "bus": "https://github.githubassets.com/images/icons/emoji/unicode/1f68c.png?v8",
    "business_suit_levitating": "https://github.githubassets.com/images/icons/emoji/unicode/1f574.png?v8",
    "busstop": "https://github.githubassets.com/images/icons/emoji/unicode/1f68f.png?v8",
    "bust_in_silhouette": "https://github.githubassets.com/images/icons/emoji/unicode/1f464.png?v8",
    "busts_in_silhouette": "https://github.githubassets.com/images/icons/emoji/unicode/1f465.png?v8",
    "butter": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c8.png?v8",
    "butterfly": "https://github.githubassets.com/images/icons/emoji/unicode/1f98b.png?v8",
    "cactus": "https://github.githubassets.com/images/icons/emoji/unicode/1f335.png?v8",
    "cake": "https://github.githubassets.com/images/icons/emoji/unicode/1f370.png?v8",
    "calendar": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c6.png?v8",
    "call_me_hand": "https://github.githubassets.com/images/icons/emoji/unicode/1f919.png?v8",
    "calling": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f2.png?v8",
    "cambodia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ed.png?v8",
    "camel": "https://github.githubassets.com/images/icons/emoji/unicode/1f42b.png?v8",
    "camera": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f7.png?v8",
    "camera_flash": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f8.png?v8",
    "cameroon": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f2.png?v8",
    "camping": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d5.png?v8",
    "canada": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e6.png?v8",
    "canary_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1e8.png?v8",
    "cancer": "https://github.githubassets.com/images/icons/emoji/unicode/264b.png?v8",
    "candle": "https://github.githubassets.com/images/icons/emoji/unicode/1f56f.png?v8",
    "candy": "https://github.githubassets.com/images/icons/emoji/unicode/1f36c.png?v8",
    "canned_food": "https://github.githubassets.com/images/icons/emoji/unicode/1f96b.png?v8",
    "canoe": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f6.png?v8",
    "cape_verde": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fb.png?v8",
    "capital_abcd": "https://github.githubassets.com/images/icons/emoji/unicode/1f520.png?v8",
    "capricorn": "https://github.githubassets.com/images/icons/emoji/unicode/2651.png?v8",
    "car": "https://github.githubassets.com/images/icons/emoji/unicode/1f697.png?v8",
    "card_file_box": "https://github.githubassets.com/images/icons/emoji/unicode/1f5c3.png?v8",
    "card_index": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c7.png?v8",
    "card_index_dividers": "https://github.githubassets.com/images/icons/emoji/unicode/1f5c2.png?v8",
    "caribbean_netherlands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f6.png?v8",
    "carousel_horse": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a0.png?v8",
    "carrot": "https://github.githubassets.com/images/icons/emoji/unicode/1f955.png?v8",
    "cartwheeling": "https://github.githubassets.com/images/icons/emoji/unicode/1f938.png?v8",
    "cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f431.png?v8",
    "cat2": "https://github.githubassets.com/images/icons/emoji/unicode/1f408.png?v8",
    "cayman_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1fe.png?v8",
    "cd": "https://github.githubassets.com/images/icons/emoji/unicode/1f4bf.png?v8",
    "central_african_republic": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1eb.png?v8",
    "ceuta_melilla": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1e6.png?v8",
    "chad": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e9.png?v8",
    "chains": "https://github.githubassets.com/images/icons/emoji/unicode/26d3.png?v8",
    "chair": "https://github.githubassets.com/images/icons/emoji/unicode/1fa91.png?v8",
    "champagne": "https://github.githubassets.com/images/icons/emoji/unicode/1f37e.png?v8",
    "chart": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b9.png?v8",
    "chart_with_downwards_trend": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c9.png?v8",
    "chart_with_upwards_trend": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png?v8",
    "checkered_flag": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c1.png?v8",
    "cheese": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c0.png?v8",
    "cherries": "https://github.githubassets.com/images/icons/emoji/unicode/1f352.png?v8",
    "cherry_blossom": "https://github.githubassets.com/images/icons/emoji/unicode/1f338.png?v8",
    "chess_pawn": "https://github.githubassets.com/images/icons/emoji/unicode/265f.png?v8",
    "chestnut": "https://github.githubassets.com/images/icons/emoji/unicode/1f330.png?v8",
    "chicken": "https://github.githubassets.com/images/icons/emoji/unicode/1f414.png?v8",
    "child": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d2.png?v8",
    "children_crossing": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b8.png?v8",
    "chile": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f1.png?v8",
    "chipmunk": "https://github.githubassets.com/images/icons/emoji/unicode/1f43f.png?v8",
    "chocolate_bar": "https://github.githubassets.com/images/icons/emoji/unicode/1f36b.png?v8",
    "chopsticks": "https://github.githubassets.com/images/icons/emoji/unicode/1f962.png?v8",
    "christmas_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fd.png?v8",
    "christmas_tree": "https://github.githubassets.com/images/icons/emoji/unicode/1f384.png?v8",
    "church": "https://github.githubassets.com/images/icons/emoji/unicode/26ea.png?v8",
    "cinema": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a6.png?v8",
    "circus_tent": "https://github.githubassets.com/images/icons/emoji/unicode/1f3aa.png?v8",
    "city_sunrise": "https://github.githubassets.com/images/icons/emoji/unicode/1f307.png?v8",
    "city_sunset": "https://github.githubassets.com/images/icons/emoji/unicode/1f306.png?v8",
    "cityscape": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d9.png?v8",
    "cl": "https://github.githubassets.com/images/icons/emoji/unicode/1f191.png?v8",
    "clamp": "https://github.githubassets.com/images/icons/emoji/unicode/1f5dc.png?v8",
    "clap": "https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png?v8",
    "clapper": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ac.png?v8",
    "classical_building": "https://github.githubassets.com/images/icons/emoji/unicode/1f3db.png?v8",
    "climbing": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d7.png?v8",
    "climbing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d7-2642.png?v8",
    "climbing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d7-2640.png?v8",
    "clinking_glasses": "https://github.githubassets.com/images/icons/emoji/unicode/1f942.png?v8",
    "clipboard": "https://github.githubassets.com/images/icons/emoji/unicode/1f4cb.png?v8",
    "clipperton_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f5.png?v8",
    "clock1": "https://github.githubassets.com/images/icons/emoji/unicode/1f550.png?v8",
    "clock10": "https://github.githubassets.com/images/icons/emoji/unicode/1f559.png?v8",
    "clock1030": "https://github.githubassets.com/images/icons/emoji/unicode/1f565.png?v8",
    "clock11": "https://github.githubassets.com/images/icons/emoji/unicode/1f55a.png?v8",
    "clock1130": "https://github.githubassets.com/images/icons/emoji/unicode/1f566.png?v8",
    "clock12": "https://github.githubassets.com/images/icons/emoji/unicode/1f55b.png?v8",
    "clock1230": "https://github.githubassets.com/images/icons/emoji/unicode/1f567.png?v8",
    "clock130": "https://github.githubassets.com/images/icons/emoji/unicode/1f55c.png?v8",
    "clock2": "https://github.githubassets.com/images/icons/emoji/unicode/1f551.png?v8",
    "clock230": "https://github.githubassets.com/images/icons/emoji/unicode/1f55d.png?v8",
    "clock3": "https://github.githubassets.com/images/icons/emoji/unicode/1f552.png?v8",
    "clock330": "https://github.githubassets.com/images/icons/emoji/unicode/1f55e.png?v8",
    "clock4": "https://github.githubassets.com/images/icons/emoji/unicode/1f553.png?v8",
    "clock430": "https://github.githubassets.com/images/icons/emoji/unicode/1f55f.png?v8",
    "clock5": "https://github.githubassets.com/images/icons/emoji/unicode/1f554.png?v8",
    "clock530": "https://github.githubassets.com/images/icons/emoji/unicode/1f560.png?v8",
    "clock6": "https://github.githubassets.com/images/icons/emoji/unicode/1f555.png?v8",
    "clock630": "https://github.githubassets.com/images/icons/emoji/unicode/1f561.png?v8",
    "clock7": "https://github.githubassets.com/images/icons/emoji/unicode/1f556.png?v8",
    "clock730": "https://github.githubassets.com/images/icons/emoji/unicode/1f562.png?v8",
    "clock8": "https://github.githubassets.com/images/icons/emoji/unicode/1f557.png?v8",
    "clock830": "https://github.githubassets.com/images/icons/emoji/unicode/1f563.png?v8",
    "clock9": "https://github.githubassets.com/images/icons/emoji/unicode/1f558.png?v8",
    "clock930": "https://github.githubassets.com/images/icons/emoji/unicode/1f564.png?v8",
    "closed_book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d5.png?v8",
    "closed_lock_with_key": "https://github.githubassets.com/images/icons/emoji/unicode/1f510.png?v8",
    "closed_umbrella": "https://github.githubassets.com/images/icons/emoji/unicode/1f302.png?v8",
    "cloud": "https://github.githubassets.com/images/icons/emoji/unicode/2601.png?v8",
    "cloud_with_lightning": "https://github.githubassets.com/images/icons/emoji/unicode/1f329.png?v8",
    "cloud_with_lightning_and_rain": "https://github.githubassets.com/images/icons/emoji/unicode/26c8.png?v8",
    "cloud_with_rain": "https://github.githubassets.com/images/icons/emoji/unicode/1f327.png?v8",
    "cloud_with_snow": "https://github.githubassets.com/images/icons/emoji/unicode/1f328.png?v8",
    "clown_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f921.png?v8",
    "clubs": "https://github.githubassets.com/images/icons/emoji/unicode/2663.png?v8",
    "cn": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f3.png?v8",
    "coat": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e5.png?v8",
    "cocktail": "https://github.githubassets.com/images/icons/emoji/unicode/1f378.png?v8",
    "coconut": "https://github.githubassets.com/images/icons/emoji/unicode/1f965.png?v8",
    "cocos_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e8.png?v8",
    "coffee": "https://github.githubassets.com/images/icons/emoji/unicode/2615.png?v8",
    "coffin": "https://github.githubassets.com/images/icons/emoji/unicode/26b0.png?v8",
    "cold_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f976.png?v8",
    "cold_sweat": "https://github.githubassets.com/images/icons/emoji/unicode/1f630.png?v8",
    "collision": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a5.png?v8",
    "colombia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f4.png?v8",
    "comet": "https://github.githubassets.com/images/icons/emoji/unicode/2604.png?v8",
    "comoros": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f2.png?v8",
    "compass": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ed.png?v8",
    "computer": "https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png?v8",
    "computer_mouse": "https://github.githubassets.com/images/icons/emoji/unicode/1f5b1.png?v8",
    "confetti_ball": "https://github.githubassets.com/images/icons/emoji/unicode/1f38a.png?v8",
    "confounded": "https://github.githubassets.com/images/icons/emoji/unicode/1f616.png?v8",
    "confused": "https://github.githubassets.com/images/icons/emoji/unicode/1f615.png?v8",
    "congo_brazzaville": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ec.png?v8",
    "congo_kinshasa": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e9.png?v8",
    "congratulations": "https://github.githubassets.com/images/icons/emoji/unicode/3297.png?v8",
    "construction": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png?v8",
    "construction_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f477.png?v8",
    "construction_worker_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f477-2642.png?v8",
    "construction_worker_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f477-2640.png?v8",
    "control_knobs": "https://github.githubassets.com/images/icons/emoji/unicode/1f39b.png?v8",
    "convenience_store": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ea.png?v8",
    "cook": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f373.png?v8",
    "cook_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f0.png?v8",
    "cookie": "https://github.githubassets.com/images/icons/emoji/unicode/1f36a.png?v8",
    "cool": "https://github.githubassets.com/images/icons/emoji/unicode/1f192.png?v8",
    "cop": "https://github.githubassets.com/images/icons/emoji/unicode/1f46e.png?v8",
    "copyright": "https://github.githubassets.com/images/icons/emoji/unicode/00a9.png?v8",
    "corn": "https://github.githubassets.com/images/icons/emoji/unicode/1f33d.png?v8",
    "costa_rica": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f7.png?v8",
    "cote_divoire": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ee.png?v8",
    "couch_and_lamp": "https://github.githubassets.com/images/icons/emoji/unicode/1f6cb.png?v8",
    "couple": "https://github.githubassets.com/images/icons/emoji/unicode/1f46b.png?v8",
    "couple_with_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f491.png?v8",
    "couple_with_heart_man_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-2764-1f468.png?v8",
    "couple_with_heart_woman_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f468.png?v8",
    "couple_with_heart_woman_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f469.png?v8",
    "couplekiss": "https://github.githubassets.com/images/icons/emoji/unicode/1f48f.png?v8",
    "couplekiss_man_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-2764-1f48b-1f468.png?v8",
    "couplekiss_man_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f468.png?v8",
    "couplekiss_woman_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f469.png?v8",
    "cow": "https://github.githubassets.com/images/icons/emoji/unicode/1f42e.png?v8",
    "cow2": "https://github.githubassets.com/images/icons/emoji/unicode/1f404.png?v8",
    "cowboy_hat_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f920.png?v8",
    "crab": "https://github.githubassets.com/images/icons/emoji/unicode/1f980.png?v8",
    "crayon": "https://github.githubassets.com/images/icons/emoji/unicode/1f58d.png?v8",
    "credit_card": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b3.png?v8",
    "crescent_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f319.png?v8",
    "cricket": "https://github.githubassets.com/images/icons/emoji/unicode/1f997.png?v8",
    "cricket_game": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cf.png?v8",
    "croatia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f7.png?v8",
    "crocodile": "https://github.githubassets.com/images/icons/emoji/unicode/1f40a.png?v8",
    "croissant": "https://github.githubassets.com/images/icons/emoji/unicode/1f950.png?v8",
    "crossed_fingers": "https://github.githubassets.com/images/icons/emoji/unicode/1f91e.png?v8",
    "crossed_flags": "https://github.githubassets.com/images/icons/emoji/unicode/1f38c.png?v8",
    "crossed_swords": "https://github.githubassets.com/images/icons/emoji/unicode/2694.png?v8",
    "crown": "https://github.githubassets.com/images/icons/emoji/unicode/1f451.png?v8",
    "cry": "https://github.githubassets.com/images/icons/emoji/unicode/1f622.png?v8",
    "crying_cat_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f63f.png?v8",
    "crystal_ball": "https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png?v8",
    "cuba": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fa.png?v8",
    "cucumber": "https://github.githubassets.com/images/icons/emoji/unicode/1f952.png?v8",
    "cup_with_straw": "https://github.githubassets.com/images/icons/emoji/unicode/1f964.png?v8",
    "cupcake": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c1.png?v8",
    "cupid": "https://github.githubassets.com/images/icons/emoji/unicode/1f498.png?v8",
    "curacao": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fc.png?v8",
    "curling_stone": "https://github.githubassets.com/images/icons/emoji/unicode/1f94c.png?v8",
    "curly_haired_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b1.png?v8",
    "curly_haired_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b1.png?v8",
    "curly_loop": "https://github.githubassets.com/images/icons/emoji/unicode/27b0.png?v8",
    "currency_exchange": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b1.png?v8",
    "curry": "https://github.githubassets.com/images/icons/emoji/unicode/1f35b.png?v8",
    "cursing_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f92c.png?v8",
    "custard": "https://github.githubassets.com/images/icons/emoji/unicode/1f36e.png?v8",
    "customs": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c3.png?v8",
    "cut_of_meat": "https://github.githubassets.com/images/icons/emoji/unicode/1f969.png?v8",
    "cyclone": "https://github.githubassets.com/images/icons/emoji/unicode/1f300.png?v8",
    "cyprus": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fe.png?v8",
    "czech_republic": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ff.png?v8",
    "dagger": "https://github.githubassets.com/images/icons/emoji/unicode/1f5e1.png?v8",
    "dancer": "https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8",
    "dancers": "https://github.githubassets.com/images/icons/emoji/unicode/1f46f.png?v8",
    "dancing_men": "https://github.githubassets.com/images/icons/emoji/unicode/1f46f-2642.png?v8",
    "dancing_women": "https://github.githubassets.com/images/icons/emoji/unicode/1f46f-2640.png?v8",
    "dango": "https://github.githubassets.com/images/icons/emoji/unicode/1f361.png?v8",
    "dark_sunglasses": "https://github.githubassets.com/images/icons/emoji/unicode/1f576.png?v8",
    "dart": "https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png?v8",
    "dash": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a8.png?v8",
    "date": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c5.png?v8",
    "de": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ea.png?v8",
    "deaf_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cf-2642.png?v8",
    "deaf_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cf.png?v8",
    "deaf_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cf-2640.png?v8",
    "deciduous_tree": "https://github.githubassets.com/images/icons/emoji/unicode/1f333.png?v8",
    "deer": "https://github.githubassets.com/images/icons/emoji/unicode/1f98c.png?v8",
    "denmark": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f0.png?v8",
    "department_store": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ec.png?v8",
    "derelict_house": "https://github.githubassets.com/images/icons/emoji/unicode/1f3da.png?v8",
    "desert": "https://github.githubassets.com/images/icons/emoji/unicode/1f3dc.png?v8",
    "desert_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f3dd.png?v8",
    "desktop_computer": "https://github.githubassets.com/images/icons/emoji/unicode/1f5a5.png?v8",
    "detective": "https://github.githubassets.com/images/icons/emoji/unicode/1f575.png?v8",
    "diamond_shape_with_a_dot_inside": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a0.png?v8",
    "diamonds": "https://github.githubassets.com/images/icons/emoji/unicode/2666.png?v8",
    "diego_garcia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ec.png?v8",
    "disappointed": "https://github.githubassets.com/images/icons/emoji/unicode/1f61e.png?v8",
    "disappointed_relieved": "https://github.githubassets.com/images/icons/emoji/unicode/1f625.png?v8",
    "diving_mask": "https://github.githubassets.com/images/icons/emoji/unicode/1f93f.png?v8",
    "diya_lamp": "https://github.githubassets.com/images/icons/emoji/unicode/1fa94.png?v8",
    "dizzy": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ab.png?v8",
    "dizzy_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f635.png?v8",
    "djibouti": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ef.png?v8",
    "dna": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ec.png?v8",
    "do_not_litter": "https://github.githubassets.com/images/icons/emoji/unicode/1f6af.png?v8",
    "dog": "https://github.githubassets.com/images/icons/emoji/unicode/1f436.png?v8",
    "dog2": "https://github.githubassets.com/images/icons/emoji/unicode/1f415.png?v8",
    "dollar": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png?v8",
    "dolls": "https://github.githubassets.com/images/icons/emoji/unicode/1f38e.png?v8",
    "dolphin": "https://github.githubassets.com/images/icons/emoji/unicode/1f42c.png?v8",
    "dominica": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f2.png?v8",
    "dominican_republic": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f4.png?v8",
    "door": "https://github.githubassets.com/images/icons/emoji/unicode/1f6aa.png?v8",
    "doughnut": "https://github.githubassets.com/images/icons/emoji/unicode/1f369.png?v8",
    "dove": "https://github.githubassets.com/images/icons/emoji/unicode/1f54a.png?v8",
    "dragon": "https://github.githubassets.com/images/icons/emoji/unicode/1f409.png?v8",
    "dragon_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f432.png?v8",
    "dress": "https://github.githubassets.com/images/icons/emoji/unicode/1f457.png?v8",
    "dromedary_camel": "https://github.githubassets.com/images/icons/emoji/unicode/1f42a.png?v8",
    "drooling_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f924.png?v8",
    "drop_of_blood": "https://github.githubassets.com/images/icons/emoji/unicode/1fa78.png?v8",
    "droplet": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a7.png?v8",
    "drum": "https://github.githubassets.com/images/icons/emoji/unicode/1f941.png?v8",
    "duck": "https://github.githubassets.com/images/icons/emoji/unicode/1f986.png?v8",
    "dumpling": "https://github.githubassets.com/images/icons/emoji/unicode/1f95f.png?v8",
    "dvd": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c0.png?v8",
    "e-mail": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e7.png?v8",
    "eagle": "https://github.githubassets.com/images/icons/emoji/unicode/1f985.png?v8",
    "ear": "https://github.githubassets.com/images/icons/emoji/unicode/1f442.png?v8",
    "ear_of_rice": "https://github.githubassets.com/images/icons/emoji/unicode/1f33e.png?v8",
    "ear_with_hearing_aid": "https://github.githubassets.com/images/icons/emoji/unicode/1f9bb.png?v8",
    "earth_africa": "https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png?v8",
    "earth_americas": "https://github.githubassets.com/images/icons/emoji/unicode/1f30e.png?v8",
    "earth_asia": "https://github.githubassets.com/images/icons/emoji/unicode/1f30f.png?v8",
    "ecuador": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1e8.png?v8",
    "egg": "https://github.githubassets.com/images/icons/emoji/unicode/1f95a.png?v8",
    "eggplant": "https://github.githubassets.com/images/icons/emoji/unicode/1f346.png?v8",
    "egypt": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ec.png?v8",
    "eight": "https://github.githubassets.com/images/icons/emoji/unicode/0038-20e3.png?v8",
    "eight_pointed_black_star": "https://github.githubassets.com/images/icons/emoji/unicode/2734.png?v8",
    "eight_spoked_asterisk": "https://github.githubassets.com/images/icons/emoji/unicode/2733.png?v8",
    "eject_button": "https://github.githubassets.com/images/icons/emoji/unicode/23cf.png?v8",
    "el_salvador": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fb.png?v8",
    "electric_plug": "https://github.githubassets.com/images/icons/emoji/unicode/1f50c.png?v8",
    "electron": "https://github.githubassets.com/images/icons/emoji/electron.png?v8",
    "elephant": "https://github.githubassets.com/images/icons/emoji/unicode/1f418.png?v8",
    "elf": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dd.png?v8",
    "elf_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dd-2642.png?v8",
    "elf_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dd-2640.png?v8",
    "email": "https://github.githubassets.com/images/icons/emoji/unicode/2709.png?v8",
    "end": "https://github.githubassets.com/images/icons/emoji/unicode/1f51a.png?v8",
    "england": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png?v8",
    "envelope": "https://github.githubassets.com/images/icons/emoji/unicode/2709.png?v8",
    "envelope_with_arrow": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e9.png?v8",
    "equatorial_guinea": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f6.png?v8",
    "eritrea": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f7.png?v8",
    "es": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f8.png?v8",
    "estonia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ea.png?v8",
    "ethiopia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f9.png?v8",
    "eu": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v8",
    "euro": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b6.png?v8",
    "european_castle": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f0.png?v8",
    "european_post_office": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e4.png?v8",
    "european_union": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v8",
    "evergreen_tree": "https://github.githubassets.com/images/icons/emoji/unicode/1f332.png?v8",
    "exclamation": "https://github.githubassets.com/images/icons/emoji/unicode/2757.png?v8",
    "exploding_head": "https://github.githubassets.com/images/icons/emoji/unicode/1f92f.png?v8",
    "expressionless": "https://github.githubassets.com/images/icons/emoji/unicode/1f611.png?v8",
    "eye": "https://github.githubassets.com/images/icons/emoji/unicode/1f441.png?v8",
    "eye_speech_bubble": "https://github.githubassets.com/images/icons/emoji/unicode/1f441-1f5e8.png?v8",
    "eyeglasses": "https://github.githubassets.com/images/icons/emoji/unicode/1f453.png?v8",
    "eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f440.png?v8",
    "face_with_head_bandage": "https://github.githubassets.com/images/icons/emoji/unicode/1f915.png?v8",
    "face_with_thermometer": "https://github.githubassets.com/images/icons/emoji/unicode/1f912.png?v8",
    "facepalm": "https://github.githubassets.com/images/icons/emoji/unicode/1f926.png?v8",
    "facepunch": "https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8",
    "factory": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ed.png?v8",
    "factory_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3ed.png?v8",
    "fairy": "https://github.githubassets.com/images/icons/emoji/unicode/1f9da.png?v8",
    "fairy_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9da-2642.png?v8",
    "fairy_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9da-2640.png?v8",
    "falafel": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c6.png?v8",
    "falkland_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f0.png?v8",
    "fallen_leaf": "https://github.githubassets.com/images/icons/emoji/unicode/1f342.png?v8",
    "family": "https://github.githubassets.com/images/icons/emoji/unicode/1f46a.png?v8",
    "family_man_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f466.png?v8",
    "family_man_boy_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f466-1f466.png?v8",
    "family_man_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467.png?v8",
    "family_man_girl_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467-1f466.png?v8",
    "family_man_girl_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467-1f467.png?v8",
    "family_man_man_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f466.png?v8",
    "family_man_man_boy_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f466-1f466.png?v8",
    "family_man_man_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467.png?v8",
    "family_man_man_girl_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f466.png?v8",
    "family_man_man_girl_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f467.png?v8",
    "family_man_woman_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f466.png?v8",
    "family_man_woman_boy_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f466-1f466.png?v8",
    "family_man_woman_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467.png?v8",
    "family_man_woman_girl_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f466.png?v8",
    "family_man_woman_girl_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f467.png?v8",
    "family_woman_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f466.png?v8",
    "family_woman_boy_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f466-1f466.png?v8",
    "family_woman_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467.png?v8",
    "family_woman_girl_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467-1f466.png?v8",
    "family_woman_girl_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467-1f467.png?v8",
    "family_woman_woman_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f466.png?v8",
    "family_woman_woman_boy_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f466-1f466.png?v8",
    "family_woman_woman_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467.png?v8",
    "family_woman_woman_girl_boy": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f466.png?v8",
    "family_woman_woman_girl_girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f467.png?v8",
    "farmer": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f33e.png?v8",
    "faroe_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f4.png?v8",
    "fast_forward": "https://github.githubassets.com/images/icons/emoji/unicode/23e9.png?v8",
    "fax": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e0.png?v8",
    "fearful": "https://github.githubassets.com/images/icons/emoji/unicode/1f628.png?v8",
    "feelsgood": "https://github.githubassets.com/images/icons/emoji/feelsgood.png?v8",
    "feet": "https://github.githubassets.com/images/icons/emoji/unicode/1f43e.png?v8",
    "female_detective": "https://github.githubassets.com/images/icons/emoji/unicode/1f575-2640.png?v8",
    "female_sign": "https://github.githubassets.com/images/icons/emoji/unicode/2640.png?v8",
    "ferris_wheel": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a1.png?v8",
    "ferry": "https://github.githubassets.com/images/icons/emoji/unicode/26f4.png?v8",
    "field_hockey": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d1.png?v8",
    "fiji": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1ef.png?v8",
    "file_cabinet": "https://github.githubassets.com/images/icons/emoji/unicode/1f5c4.png?v8",
    "file_folder": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8",
    "film_projector": "https://github.githubassets.com/images/icons/emoji/unicode/1f4fd.png?v8",
    "film_strip": "https://github.githubassets.com/images/icons/emoji/unicode/1f39e.png?v8",
    "finland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1ee.png?v8",
    "finnadie": "https://github.githubassets.com/images/icons/emoji/finnadie.png?v8",
    "fire": "https://github.githubassets.com/images/icons/emoji/unicode/1f525.png?v8",
    "fire_engine": "https://github.githubassets.com/images/icons/emoji/unicode/1f692.png?v8",
    "fire_extinguisher": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ef.png?v8",
    "firecracker": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e8.png?v8",
    "firefighter": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f692.png?v8",
    "fireworks": "https://github.githubassets.com/images/icons/emoji/unicode/1f386.png?v8",
    "first_quarter_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f313.png?v8",
    "first_quarter_moon_with_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f31b.png?v8",
    "fish": "https://github.githubassets.com/images/icons/emoji/unicode/1f41f.png?v8",
    "fish_cake": "https://github.githubassets.com/images/icons/emoji/unicode/1f365.png?v8",
    "fishing_pole_and_fish": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a3.png?v8",
    "fist": "https://github.githubassets.com/images/icons/emoji/unicode/270a.png?v8",
    "fist_left": "https://github.githubassets.com/images/icons/emoji/unicode/1f91b.png?v8",
    "fist_oncoming": "https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8",
    "fist_raised": "https://github.githubassets.com/images/icons/emoji/unicode/270a.png?v8",
    "fist_right": "https://github.githubassets.com/images/icons/emoji/unicode/1f91c.png?v8",
    "five": "https://github.githubassets.com/images/icons/emoji/unicode/0035-20e3.png?v8",
    "flags": "https://github.githubassets.com/images/icons/emoji/unicode/1f38f.png?v8",
    "flamingo": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a9.png?v8",
    "flashlight": "https://github.githubassets.com/images/icons/emoji/unicode/1f526.png?v8",
    "flat_shoe": "https://github.githubassets.com/images/icons/emoji/unicode/1f97f.png?v8",
    "fleur_de_lis": "https://github.githubassets.com/images/icons/emoji/unicode/269c.png?v8",
    "flight_arrival": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ec.png?v8",
    "flight_departure": "https://github.githubassets.com/images/icons/emoji/unicode/1f6eb.png?v8",
    "flipper": "https://github.githubassets.com/images/icons/emoji/unicode/1f42c.png?v8",
    "floppy_disk": "https://github.githubassets.com/images/icons/emoji/unicode/1f4be.png?v8",
    "flower_playing_cards": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b4.png?v8",
    "flushed": "https://github.githubassets.com/images/icons/emoji/unicode/1f633.png?v8",
    "flying_disc": "https://github.githubassets.com/images/icons/emoji/unicode/1f94f.png?v8",
    "flying_saucer": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f8.png?v8",
    "fog": "https://github.githubassets.com/images/icons/emoji/unicode/1f32b.png?v8",
    "foggy": "https://github.githubassets.com/images/icons/emoji/unicode/1f301.png?v8",
    "foot": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b6.png?v8",
    "football": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c8.png?v8",
    "footprints": "https://github.githubassets.com/images/icons/emoji/unicode/1f463.png?v8",
    "fork_and_knife": "https://github.githubassets.com/images/icons/emoji/unicode/1f374.png?v8",
    "fortune_cookie": "https://github.githubassets.com/images/icons/emoji/unicode/1f960.png?v8",
    "fountain": "https://github.githubassets.com/images/icons/emoji/unicode/26f2.png?v8",
    "fountain_pen": "https://github.githubassets.com/images/icons/emoji/unicode/1f58b.png?v8",
    "four": "https://github.githubassets.com/images/icons/emoji/unicode/0034-20e3.png?v8",
    "four_leaf_clover": "https://github.githubassets.com/images/icons/emoji/unicode/1f340.png?v8",
    "fox_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f98a.png?v8",
    "fr": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f7.png?v8",
    "framed_picture": "https://github.githubassets.com/images/icons/emoji/unicode/1f5bc.png?v8",
    "free": "https://github.githubassets.com/images/icons/emoji/unicode/1f193.png?v8",
    "french_guiana": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1eb.png?v8",
    "french_polynesia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1eb.png?v8",
    "french_southern_territories": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1eb.png?v8",
    "fried_egg": "https://github.githubassets.com/images/icons/emoji/unicode/1f373.png?v8",
    "fried_shrimp": "https://github.githubassets.com/images/icons/emoji/unicode/1f364.png?v8",
    "fries": "https://github.githubassets.com/images/icons/emoji/unicode/1f35f.png?v8",
    "frog": "https://github.githubassets.com/images/icons/emoji/unicode/1f438.png?v8",
    "frowning": "https://github.githubassets.com/images/icons/emoji/unicode/1f626.png?v8",
    "frowning_face": "https://github.githubassets.com/images/icons/emoji/unicode/2639.png?v8",
    "frowning_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f64d-2642.png?v8",
    "frowning_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f64d.png?v8",
    "frowning_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f64d-2640.png?v8",
    "fu": "https://github.githubassets.com/images/icons/emoji/unicode/1f595.png?v8",
    "fuelpump": "https://github.githubassets.com/images/icons/emoji/unicode/26fd.png?v8",
    "full_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f315.png?v8",
    "full_moon_with_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f31d.png?v8",
    "funeral_urn": "https://github.githubassets.com/images/icons/emoji/unicode/26b1.png?v8",
    "gabon": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e6.png?v8",
    "gambia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f2.png?v8",
    "game_die": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b2.png?v8",
    "garlic": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c4.png?v8",
    "gb": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v8",
    "gear": "https://github.githubassets.com/images/icons/emoji/unicode/2699.png?v8",
    "gem": "https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png?v8",
    "gemini": "https://github.githubassets.com/images/icons/emoji/unicode/264a.png?v8",
    "genie": "https://github.githubassets.com/images/icons/emoji/unicode/1f9de.png?v8",
    "genie_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9de-2642.png?v8",
    "genie_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9de-2640.png?v8",
    "georgia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ea.png?v8",
    "ghana": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ed.png?v8",
    "ghost": "https://github.githubassets.com/images/icons/emoji/unicode/1f47b.png?v8",
    "gibraltar": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ee.png?v8",
    "gift": "https://github.githubassets.com/images/icons/emoji/unicode/1f381.png?v8",
    "gift_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f49d.png?v8",
    "giraffe": "https://github.githubassets.com/images/icons/emoji/unicode/1f992.png?v8",
    "girl": "https://github.githubassets.com/images/icons/emoji/unicode/1f467.png?v8",
    "globe_with_meridians": "https://github.githubassets.com/images/icons/emoji/unicode/1f310.png?v8",
    "gloves": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e4.png?v8",
    "goal_net": "https://github.githubassets.com/images/icons/emoji/unicode/1f945.png?v8",
    "goat": "https://github.githubassets.com/images/icons/emoji/unicode/1f410.png?v8",
    "goberserk": "https://github.githubassets.com/images/icons/emoji/goberserk.png?v8",
    "godmode": "https://github.githubassets.com/images/icons/emoji/godmode.png?v8",
    "goggles": "https://github.githubassets.com/images/icons/emoji/unicode/1f97d.png?v8",
    "golf": "https://github.githubassets.com/images/icons/emoji/unicode/26f3.png?v8",
    "golfing": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cc.png?v8",
    "golfing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cc-2642.png?v8",
    "golfing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cc-2640.png?v8",
    "gorilla": "https://github.githubassets.com/images/icons/emoji/unicode/1f98d.png?v8",
    "grapes": "https://github.githubassets.com/images/icons/emoji/unicode/1f347.png?v8",
    "greece": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f7.png?v8",
    "green_apple": "https://github.githubassets.com/images/icons/emoji/unicode/1f34f.png?v8",
    "green_book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d7.png?v8",
    "green_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e2.png?v8",
    "green_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f49a.png?v8",
    "green_salad": "https://github.githubassets.com/images/icons/emoji/unicode/1f957.png?v8",
    "green_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e9.png?v8",
    "greenland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f1.png?v8",
    "grenada": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e9.png?v8",
    "grey_exclamation": "https://github.githubassets.com/images/icons/emoji/unicode/2755.png?v8",
    "grey_question": "https://github.githubassets.com/images/icons/emoji/unicode/2754.png?v8",
    "grimacing": "https://github.githubassets.com/images/icons/emoji/unicode/1f62c.png?v8",
    "grin": "https://github.githubassets.com/images/icons/emoji/unicode/1f601.png?v8",
    "grinning": "https://github.githubassets.com/images/icons/emoji/unicode/1f600.png?v8",
    "guadeloupe": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f5.png?v8",
    "guam": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fa.png?v8",
    "guard": "https://github.githubassets.com/images/icons/emoji/unicode/1f482.png?v8",
    "guardsman": "https://github.githubassets.com/images/icons/emoji/unicode/1f482-2642.png?v8",
    "guardswoman": "https://github.githubassets.com/images/icons/emoji/unicode/1f482-2640.png?v8",
    "guatemala": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f9.png?v8",
    "guernsey": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ec.png?v8",
    "guide_dog": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ae.png?v8",
    "guinea": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f3.png?v8",
    "guinea_bissau": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fc.png?v8",
    "guitar": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b8.png?v8",
    "gun": "https://github.githubassets.com/images/icons/emoji/unicode/1f52b.png?v8",
    "guyana": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fe.png?v8",
    "haircut": "https://github.githubassets.com/images/icons/emoji/unicode/1f487.png?v8",
    "haircut_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f487-2642.png?v8",
    "haircut_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f487-2640.png?v8",
    "haiti": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f9.png?v8",
    "hamburger": "https://github.githubassets.com/images/icons/emoji/unicode/1f354.png?v8",
    "hammer": "https://github.githubassets.com/images/icons/emoji/unicode/1f528.png?v8",
    "hammer_and_pick": "https://github.githubassets.com/images/icons/emoji/unicode/2692.png?v8",
    "hammer_and_wrench": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png?v8",
    "hamster": "https://github.githubassets.com/images/icons/emoji/unicode/1f439.png?v8",
    "hand": "https://github.githubassets.com/images/icons/emoji/unicode/270b.png?v8",
    "hand_over_mouth": "https://github.githubassets.com/images/icons/emoji/unicode/1f92d.png?v8",
    "handbag": "https://github.githubassets.com/images/icons/emoji/unicode/1f45c.png?v8",
    "handball_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f93e.png?v8",
    "handshake": "https://github.githubassets.com/images/icons/emoji/unicode/1f91d.png?v8",
    "hankey": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8",
    "hash": "https://github.githubassets.com/images/icons/emoji/unicode/0023-20e3.png?v8",
    "hatched_chick": "https://github.githubassets.com/images/icons/emoji/unicode/1f425.png?v8",
    "hatching_chick": "https://github.githubassets.com/images/icons/emoji/unicode/1f423.png?v8",
    "headphones": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a7.png?v8",
    "health_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2695.png?v8",
    "hear_no_evil": "https://github.githubassets.com/images/icons/emoji/unicode/1f649.png?v8",
    "heard_mcdonald_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f2.png?v8",
    "heart": "https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8",
    "heart_decoration": "https://github.githubassets.com/images/icons/emoji/unicode/1f49f.png?v8",
    "heart_eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f60d.png?v8",
    "heart_eyes_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f63b.png?v8",
    "heartbeat": "https://github.githubassets.com/images/icons/emoji/unicode/1f493.png?v8",
    "heartpulse": "https://github.githubassets.com/images/icons/emoji/unicode/1f497.png?v8",
    "hearts": "https://github.githubassets.com/images/icons/emoji/unicode/2665.png?v8",
    "heavy_check_mark": "https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8",
    "heavy_division_sign": "https://github.githubassets.com/images/icons/emoji/unicode/2797.png?v8",
    "heavy_dollar_sign": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b2.png?v8",
    "heavy_exclamation_mark": "https://github.githubassets.com/images/icons/emoji/unicode/2757.png?v8",
    "heavy_heart_exclamation": "https://github.githubassets.com/images/icons/emoji/unicode/2763.png?v8",
    "heavy_minus_sign": "https://github.githubassets.com/images/icons/emoji/unicode/2796.png?v8",
    "heavy_multiplication_x": "https://github.githubassets.com/images/icons/emoji/unicode/2716.png?v8",
    "heavy_plus_sign": "https://github.githubassets.com/images/icons/emoji/unicode/2795.png?v8",
    "hedgehog": "https://github.githubassets.com/images/icons/emoji/unicode/1f994.png?v8",
    "helicopter": "https://github.githubassets.com/images/icons/emoji/unicode/1f681.png?v8",
    "herb": "https://github.githubassets.com/images/icons/emoji/unicode/1f33f.png?v8",
    "hibiscus": "https://github.githubassets.com/images/icons/emoji/unicode/1f33a.png?v8",
    "high_brightness": "https://github.githubassets.com/images/icons/emoji/unicode/1f506.png?v8",
    "high_heel": "https://github.githubassets.com/images/icons/emoji/unicode/1f460.png?v8",
    "hiking_boot": "https://github.githubassets.com/images/icons/emoji/unicode/1f97e.png?v8",
    "hindu_temple": "https://github.githubassets.com/images/icons/emoji/unicode/1f6d5.png?v8",
    "hippopotamus": "https://github.githubassets.com/images/icons/emoji/unicode/1f99b.png?v8",
    "hocho": "https://github.githubassets.com/images/icons/emoji/unicode/1f52a.png?v8",
    "hole": "https://github.githubassets.com/images/icons/emoji/unicode/1f573.png?v8",
    "honduras": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f3.png?v8",
    "honey_pot": "https://github.githubassets.com/images/icons/emoji/unicode/1f36f.png?v8",
    "honeybee": "https://github.githubassets.com/images/icons/emoji/unicode/1f41d.png?v8",
    "hong_kong": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f0.png?v8",
    "horse": "https://github.githubassets.com/images/icons/emoji/unicode/1f434.png?v8",
    "horse_racing": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c7.png?v8",
    "hospital": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e5.png?v8",
    "hot_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f975.png?v8",
    "hot_pepper": "https://github.githubassets.com/images/icons/emoji/unicode/1f336.png?v8",
    "hotdog": "https://github.githubassets.com/images/icons/emoji/unicode/1f32d.png?v8",
    "hotel": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e8.png?v8",
    "hotsprings": "https://github.githubassets.com/images/icons/emoji/unicode/2668.png?v8",
    "hourglass": "https://github.githubassets.com/images/icons/emoji/unicode/231b.png?v8",
    "hourglass_flowing_sand": "https://github.githubassets.com/images/icons/emoji/unicode/23f3.png?v8",
    "house": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png?v8",
    "house_with_garden": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e1.png?v8",
    "houses": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d8.png?v8",
    "hugs": "https://github.githubassets.com/images/icons/emoji/unicode/1f917.png?v8",
    "hungary": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1fa.png?v8",
    "hurtrealbad": "https://github.githubassets.com/images/icons/emoji/hurtrealbad.png?v8",
    "hushed": "https://github.githubassets.com/images/icons/emoji/unicode/1f62f.png?v8",
    "ice_cream": "https://github.githubassets.com/images/icons/emoji/unicode/1f368.png?v8",
    "ice_cube": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ca.png?v8",
    "ice_hockey": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d2.png?v8",
    "ice_skate": "https://github.githubassets.com/images/icons/emoji/unicode/26f8.png?v8",
    "icecream": "https://github.githubassets.com/images/icons/emoji/unicode/1f366.png?v8",
    "iceland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f8.png?v8",
    "id": "https://github.githubassets.com/images/icons/emoji/unicode/1f194.png?v8",
    "ideograph_advantage": "https://github.githubassets.com/images/icons/emoji/unicode/1f250.png?v8",
    "imp": "https://github.githubassets.com/images/icons/emoji/unicode/1f47f.png?v8",
    "inbox_tray": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e5.png?v8",
    "incoming_envelope": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e8.png?v8",
    "india": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f3.png?v8",
    "indonesia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1e9.png?v8",
    "infinity": "https://github.githubassets.com/images/icons/emoji/unicode/267e.png?v8",
    "information_desk_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f481.png?v8",
    "information_source": "https://github.githubassets.com/images/icons/emoji/unicode/2139.png?v8",
    "innocent": "https://github.githubassets.com/images/icons/emoji/unicode/1f607.png?v8",
    "interrobang": "https://github.githubassets.com/images/icons/emoji/unicode/2049.png?v8",
    "iphone": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f1.png?v8",
    "iran": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f7.png?v8",
    "iraq": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f6.png?v8",
    "ireland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1ea.png?v8",
    "isle_of_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f2.png?v8",
    "israel": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f1.png?v8",
    "it": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f9.png?v8",
    "izakaya_lantern": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ee.png?v8",
    "jack_o_lantern": "https://github.githubassets.com/images/icons/emoji/unicode/1f383.png?v8",
    "jamaica": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f2.png?v8",
    "japan": "https://github.githubassets.com/images/icons/emoji/unicode/1f5fe.png?v8",
    "japanese_castle": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ef.png?v8",
    "japanese_goblin": "https://github.githubassets.com/images/icons/emoji/unicode/1f47a.png?v8",
    "japanese_ogre": "https://github.githubassets.com/images/icons/emoji/unicode/1f479.png?v8",
    "jeans": "https://github.githubassets.com/images/icons/emoji/unicode/1f456.png?v8",
    "jersey": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1ea.png?v8",
    "jigsaw": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e9.png?v8",
    "jordan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f4.png?v8",
    "joy": "https://github.githubassets.com/images/icons/emoji/unicode/1f602.png?v8",
    "joy_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f639.png?v8",
    "joystick": "https://github.githubassets.com/images/icons/emoji/unicode/1f579.png?v8",
    "jp": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f5.png?v8",
    "judge": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2696.png?v8",
    "juggling_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f939.png?v8",
    "kaaba": "https://github.githubassets.com/images/icons/emoji/unicode/1f54b.png?v8",
    "kangaroo": "https://github.githubassets.com/images/icons/emoji/unicode/1f998.png?v8",
    "kazakhstan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ff.png?v8",
    "kenya": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ea.png?v8",
    "key": "https://github.githubassets.com/images/icons/emoji/unicode/1f511.png?v8",
    "keyboard": "https://github.githubassets.com/images/icons/emoji/unicode/2328.png?v8",
    "keycap_ten": "https://github.githubassets.com/images/icons/emoji/unicode/1f51f.png?v8",
    "kick_scooter": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f4.png?v8",
    "kimono": "https://github.githubassets.com/images/icons/emoji/unicode/1f458.png?v8",
    "kiribati": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ee.png?v8",
    "kiss": "https://github.githubassets.com/images/icons/emoji/unicode/1f48b.png?v8",
    "kissing": "https://github.githubassets.com/images/icons/emoji/unicode/1f617.png?v8",
    "kissing_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f63d.png?v8",
    "kissing_closed_eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f61a.png?v8",
    "kissing_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f618.png?v8",
    "kissing_smiling_eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f619.png?v8",
    "kite": "https://github.githubassets.com/images/icons/emoji/unicode/1fa81.png?v8",
    "kiwi_fruit": "https://github.githubassets.com/images/icons/emoji/unicode/1f95d.png?v8",
    "kneeling_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ce-2642.png?v8",
    "kneeling_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ce.png?v8",
    "kneeling_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ce-2640.png?v8",
    "knife": "https://github.githubassets.com/images/icons/emoji/unicode/1f52a.png?v8",
    "koala": "https://github.githubassets.com/images/icons/emoji/unicode/1f428.png?v8",
    "koko": "https://github.githubassets.com/images/icons/emoji/unicode/1f201.png?v8",
    "kosovo": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fd-1f1f0.png?v8",
    "kr": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f7.png?v8",
    "kuwait": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1fc.png?v8",
    "kyrgyzstan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ec.png?v8",
    "lab_coat": "https://github.githubassets.com/images/icons/emoji/unicode/1f97c.png?v8",
    "label": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f7.png?v8",
    "lacrosse": "https://github.githubassets.com/images/icons/emoji/unicode/1f94d.png?v8",
    "lantern": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ee.png?v8",
    "laos": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e6.png?v8",
    "large_blue_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f535.png?v8",
    "large_blue_diamond": "https://github.githubassets.com/images/icons/emoji/unicode/1f537.png?v8",
    "large_orange_diamond": "https://github.githubassets.com/images/icons/emoji/unicode/1f536.png?v8",
    "last_quarter_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f317.png?v8",
    "last_quarter_moon_with_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f31c.png?v8",
    "latin_cross": "https://github.githubassets.com/images/icons/emoji/unicode/271d.png?v8",
    "latvia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fb.png?v8",
    "laughing": "https://github.githubassets.com/images/icons/emoji/unicode/1f606.png?v8",
    "leafy_green": "https://github.githubassets.com/images/icons/emoji/unicode/1f96c.png?v8",
    "leaves": "https://github.githubassets.com/images/icons/emoji/unicode/1f343.png?v8",
    "lebanon": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e7.png?v8",
    "ledger": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d2.png?v8",
    "left_luggage": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c5.png?v8",
    "left_right_arrow": "https://github.githubassets.com/images/icons/emoji/unicode/2194.png?v8",
    "left_speech_bubble": "https://github.githubassets.com/images/icons/emoji/unicode/1f5e8.png?v8",
    "leftwards_arrow_with_hook": "https://github.githubassets.com/images/icons/emoji/unicode/21a9.png?v8",
    "leg": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b5.png?v8",
    "lemon": "https://github.githubassets.com/images/icons/emoji/unicode/1f34b.png?v8",
    "leo": "https://github.githubassets.com/images/icons/emoji/unicode/264c.png?v8",
    "leopard": "https://github.githubassets.com/images/icons/emoji/unicode/1f406.png?v8",
    "lesotho": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f8.png?v8",
    "level_slider": "https://github.githubassets.com/images/icons/emoji/unicode/1f39a.png?v8",
    "liberia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f7.png?v8",
    "libra": "https://github.githubassets.com/images/icons/emoji/unicode/264e.png?v8",
    "libya": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fe.png?v8",
    "liechtenstein": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1ee.png?v8",
    "light_rail": "https://github.githubassets.com/images/icons/emoji/unicode/1f688.png?v8",
    "link": "https://github.githubassets.com/images/icons/emoji/unicode/1f517.png?v8",
    "lion": "https://github.githubassets.com/images/icons/emoji/unicode/1f981.png?v8",
    "lips": "https://github.githubassets.com/images/icons/emoji/unicode/1f444.png?v8",
    "lipstick": "https://github.githubassets.com/images/icons/emoji/unicode/1f484.png?v8",
    "lithuania": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f9.png?v8",
    "lizard": "https://github.githubassets.com/images/icons/emoji/unicode/1f98e.png?v8",
    "llama": "https://github.githubassets.com/images/icons/emoji/unicode/1f999.png?v8",
    "lobster": "https://github.githubassets.com/images/icons/emoji/unicode/1f99e.png?v8",
    "lock": "https://github.githubassets.com/images/icons/emoji/unicode/1f512.png?v8",
    "lock_with_ink_pen": "https://github.githubassets.com/images/icons/emoji/unicode/1f50f.png?v8",
    "lollipop": "https://github.githubassets.com/images/icons/emoji/unicode/1f36d.png?v8",
    "loop": "https://github.githubassets.com/images/icons/emoji/unicode/27bf.png?v8",
    "lotion_bottle": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f4.png?v8",
    "lotus_position": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d8.png?v8",
    "lotus_position_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d8-2642.png?v8",
    "lotus_position_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d8-2640.png?v8",
    "loud_sound": "https://github.githubassets.com/images/icons/emoji/unicode/1f50a.png?v8",
    "loudspeaker": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png?v8",
    "love_hotel": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e9.png?v8",
    "love_letter": "https://github.githubassets.com/images/icons/emoji/unicode/1f48c.png?v8",
    "love_you_gesture": "https://github.githubassets.com/images/icons/emoji/unicode/1f91f.png?v8",
    "low_brightness": "https://github.githubassets.com/images/icons/emoji/unicode/1f505.png?v8",
    "luggage": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f3.png?v8",
    "luxembourg": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fa.png?v8",
    "lying_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f925.png?v8",
    "m": "https://github.githubassets.com/images/icons/emoji/unicode/24c2.png?v8",
    "macau": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f4.png?v8",
    "macedonia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f0.png?v8",
    "madagascar": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ec.png?v8",
    "mag": "https://github.githubassets.com/images/icons/emoji/unicode/1f50d.png?v8",
    "mag_right": "https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png?v8",
    "mage": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d9.png?v8",
    "mage_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d9-2642.png?v8",
    "mage_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d9-2640.png?v8",
    "magnet": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f2.png?v8",
    "mahjong": "https://github.githubassets.com/images/icons/emoji/unicode/1f004.png?v8",
    "mailbox": "https://github.githubassets.com/images/icons/emoji/unicode/1f4eb.png?v8",
    "mailbox_closed": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ea.png?v8",
    "mailbox_with_mail": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ec.png?v8",
    "mailbox_with_no_mail": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ed.png?v8",
    "malawi": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fc.png?v8",
    "malaysia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fe.png?v8",
    "maldives": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fb.png?v8",
    "male_detective": "https://github.githubassets.com/images/icons/emoji/unicode/1f575-2642.png?v8",
    "male_sign": "https://github.githubassets.com/images/icons/emoji/unicode/2642.png?v8",
    "mali": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f1.png?v8",
    "malta": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f9.png?v8",
    "man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468.png?v8",
    "man_artist": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3a8.png?v8",
    "man_astronaut": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f680.png?v8",
    "man_cartwheeling": "https://github.githubassets.com/images/icons/emoji/unicode/1f938-2642.png?v8",
    "man_cook": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f373.png?v8",
    "man_dancing": "https://github.githubassets.com/images/icons/emoji/unicode/1f57a.png?v8",
    "man_facepalming": "https://github.githubassets.com/images/icons/emoji/unicode/1f926-2642.png?v8",
    "man_factory_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3ed.png?v8",
    "man_farmer": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f33e.png?v8",
    "man_firefighter": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f692.png?v8",
    "man_health_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-2695.png?v8",
    "man_in_manual_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9bd.png?v8",
    "man_in_motorized_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9bc.png?v8",
    "man_in_tuxedo": "https://github.githubassets.com/images/icons/emoji/unicode/1f935.png?v8",
    "man_judge": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-2696.png?v8",
    "man_juggling": "https://github.githubassets.com/images/icons/emoji/unicode/1f939-2642.png?v8",
    "man_mechanic": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f527.png?v8",
    "man_office_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f4bc.png?v8",
    "man_pilot": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-2708.png?v8",
    "man_playing_handball": "https://github.githubassets.com/images/icons/emoji/unicode/1f93e-2642.png?v8",
    "man_playing_water_polo": "https://github.githubassets.com/images/icons/emoji/unicode/1f93d-2642.png?v8",
    "man_scientist": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f52c.png?v8",
    "man_shrugging": "https://github.githubassets.com/images/icons/emoji/unicode/1f937-2642.png?v8",
    "man_singer": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3a4.png?v8",
    "man_student": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f393.png?v8",
    "man_teacher": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3eb.png?v8",
    "man_technologist": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f4bb.png?v8",
    "man_with_gua_pi_mao": "https://github.githubassets.com/images/icons/emoji/unicode/1f472.png?v8",
    "man_with_probing_cane": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9af.png?v8",
    "man_with_turban": "https://github.githubassets.com/images/icons/emoji/unicode/1f473-2642.png?v8",
    "mandarin": "https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8",
    "mango": "https://github.githubassets.com/images/icons/emoji/unicode/1f96d.png?v8",
    "mans_shoe": "https://github.githubassets.com/images/icons/emoji/unicode/1f45e.png?v8",
    "mantelpiece_clock": "https://github.githubassets.com/images/icons/emoji/unicode/1f570.png?v8",
    "manual_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9bd.png?v8",
    "maple_leaf": "https://github.githubassets.com/images/icons/emoji/unicode/1f341.png?v8",
    "marshall_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ed.png?v8",
    "martial_arts_uniform": "https://github.githubassets.com/images/icons/emoji/unicode/1f94b.png?v8",
    "martinique": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f6.png?v8",
    "mask": "https://github.githubassets.com/images/icons/emoji/unicode/1f637.png?v8",
    "massage": "https://github.githubassets.com/images/icons/emoji/unicode/1f486.png?v8",
    "massage_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f486-2642.png?v8",
    "massage_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f486-2640.png?v8",
    "mate": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c9.png?v8",
    "mauritania": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f7.png?v8",
    "mauritius": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fa.png?v8",
    "mayotte": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fe-1f1f9.png?v8",
    "meat_on_bone": "https://github.githubassets.com/images/icons/emoji/unicode/1f356.png?v8",
    "mechanic": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f527.png?v8",
    "mechanical_arm": "https://github.githubassets.com/images/icons/emoji/unicode/1f9be.png?v8",
    "mechanical_leg": "https://github.githubassets.com/images/icons/emoji/unicode/1f9bf.png?v8",
    "medal_military": "https://github.githubassets.com/images/icons/emoji/unicode/1f396.png?v8",
    "medal_sports": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c5.png?v8",
    "medical_symbol": "https://github.githubassets.com/images/icons/emoji/unicode/2695.png?v8",
    "mega": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png?v8",
    "melon": "https://github.githubassets.com/images/icons/emoji/unicode/1f348.png?v8",
    "memo": "https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png?v8",
    "men_wrestling": "https://github.githubassets.com/images/icons/emoji/unicode/1f93c-2642.png?v8",
    "menorah": "https://github.githubassets.com/images/icons/emoji/unicode/1f54e.png?v8",
    "mens": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b9.png?v8",
    "mermaid": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dc-2640.png?v8",
    "merman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dc-2642.png?v8",
    "merperson": "https://github.githubassets.com/images/icons/emoji/unicode/1f9dc.png?v8",
    "metal": "https://github.githubassets.com/images/icons/emoji/unicode/1f918.png?v8",
    "metro": "https://github.githubassets.com/images/icons/emoji/unicode/1f687.png?v8",
    "mexico": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fd.png?v8",
    "microbe": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a0.png?v8",
    "micronesia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f2.png?v8",
    "microphone": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a4.png?v8",
    "microscope": "https://github.githubassets.com/images/icons/emoji/unicode/1f52c.png?v8",
    "middle_finger": "https://github.githubassets.com/images/icons/emoji/unicode/1f595.png?v8",
    "milk_glass": "https://github.githubassets.com/images/icons/emoji/unicode/1f95b.png?v8",
    "milky_way": "https://github.githubassets.com/images/icons/emoji/unicode/1f30c.png?v8",
    "minibus": "https://github.githubassets.com/images/icons/emoji/unicode/1f690.png?v8",
    "minidisc": "https://github.githubassets.com/images/icons/emoji/unicode/1f4bd.png?v8",
    "mobile_phone_off": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f4.png?v8",
    "moldova": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e9.png?v8",
    "monaco": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e8.png?v8",
    "money_mouth_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f911.png?v8",
    "money_with_wings": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b8.png?v8",
    "moneybag": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b0.png?v8",
    "mongolia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f3.png?v8",
    "monkey": "https://github.githubassets.com/images/icons/emoji/unicode/1f412.png?v8",
    "monkey_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f435.png?v8",
    "monocle_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d0.png?v8",
    "monorail": "https://github.githubassets.com/images/icons/emoji/unicode/1f69d.png?v8",
    "montenegro": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ea.png?v8",
    "montserrat": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f8.png?v8",
    "moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f314.png?v8",
    "moon_cake": "https://github.githubassets.com/images/icons/emoji/unicode/1f96e.png?v8",
    "morocco": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e6.png?v8",
    "mortar_board": "https://github.githubassets.com/images/icons/emoji/unicode/1f393.png?v8",
    "mosque": "https://github.githubassets.com/images/icons/emoji/unicode/1f54c.png?v8",
    "mosquito": "https://github.githubassets.com/images/icons/emoji/unicode/1f99f.png?v8",
    "motor_boat": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e5.png?v8",
    "motor_scooter": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f5.png?v8",
    "motorcycle": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cd.png?v8",
    "motorized_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9bc.png?v8",
    "motorway": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e3.png?v8",
    "mount_fuji": "https://github.githubassets.com/images/icons/emoji/unicode/1f5fb.png?v8",
    "mountain": "https://github.githubassets.com/images/icons/emoji/unicode/26f0.png?v8",
    "mountain_bicyclist": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b5.png?v8",
    "mountain_biking_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b5-2642.png?v8",
    "mountain_biking_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b5-2640.png?v8",
    "mountain_cableway": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a0.png?v8",
    "mountain_railway": "https://github.githubassets.com/images/icons/emoji/unicode/1f69e.png?v8",
    "mountain_snow": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d4.png?v8",
    "mouse": "https://github.githubassets.com/images/icons/emoji/unicode/1f42d.png?v8",
    "mouse2": "https://github.githubassets.com/images/icons/emoji/unicode/1f401.png?v8",
    "movie_camera": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a5.png?v8",
    "moyai": "https://github.githubassets.com/images/icons/emoji/unicode/1f5ff.png?v8",
    "mozambique": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ff.png?v8",
    "mrs_claus": "https://github.githubassets.com/images/icons/emoji/unicode/1f936.png?v8",
    "muscle": "https://github.githubassets.com/images/icons/emoji/unicode/1f4aa.png?v8",
    "mushroom": "https://github.githubassets.com/images/icons/emoji/unicode/1f344.png?v8",
    "musical_keyboard": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b9.png?v8",
    "musical_note": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b5.png?v8",
    "musical_score": "https://github.githubassets.com/images/icons/emoji/unicode/1f3bc.png?v8",
    "mute": "https://github.githubassets.com/images/icons/emoji/unicode/1f507.png?v8",
    "myanmar": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f2.png?v8",
    "nail_care": "https://github.githubassets.com/images/icons/emoji/unicode/1f485.png?v8",
    "name_badge": "https://github.githubassets.com/images/icons/emoji/unicode/1f4db.png?v8",
    "namibia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1e6.png?v8",
    "national_park": "https://github.githubassets.com/images/icons/emoji/unicode/1f3de.png?v8",
    "nauru": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f7.png?v8",
    "nauseated_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f922.png?v8",
    "nazar_amulet": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ff.png?v8",
    "neckbeard": "https://github.githubassets.com/images/icons/emoji/neckbeard.png?v8",
    "necktie": "https://github.githubassets.com/images/icons/emoji/unicode/1f454.png?v8",
    "negative_squared_cross_mark": "https://github.githubassets.com/images/icons/emoji/unicode/274e.png?v8",
    "nepal": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f5.png?v8",
    "nerd_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f913.png?v8",
    "netherlands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f1.png?v8",
    "neutral_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f610.png?v8",
    "new": "https://github.githubassets.com/images/icons/emoji/unicode/1f195.png?v8",
    "new_caledonia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1e8.png?v8",
    "new_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f311.png?v8",
    "new_moon_with_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f31a.png?v8",
    "new_zealand": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ff.png?v8",
    "newspaper": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f0.png?v8",
    "newspaper_roll": "https://github.githubassets.com/images/icons/emoji/unicode/1f5de.png?v8",
    "next_track_button": "https://github.githubassets.com/images/icons/emoji/unicode/23ed.png?v8",
    "ng": "https://github.githubassets.com/images/icons/emoji/unicode/1f196.png?v8",
    "ng_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f645-2642.png?v8",
    "ng_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f645-2640.png?v8",
    "nicaragua": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ee.png?v8",
    "niger": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ea.png?v8",
    "nigeria": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ec.png?v8",
    "night_with_stars": "https://github.githubassets.com/images/icons/emoji/unicode/1f303.png?v8",
    "nine": "https://github.githubassets.com/images/icons/emoji/unicode/0039-20e3.png?v8",
    "niue": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1fa.png?v8",
    "no_bell": "https://github.githubassets.com/images/icons/emoji/unicode/1f515.png?v8",
    "no_bicycles": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b3.png?v8",
    "no_entry": "https://github.githubassets.com/images/icons/emoji/unicode/26d4.png?v8",
    "no_entry_sign": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ab.png?v8",
    "no_good": "https://github.githubassets.com/images/icons/emoji/unicode/1f645.png?v8",
    "no_good_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f645-2642.png?v8",
    "no_good_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f645-2640.png?v8",
    "no_mobile_phones": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f5.png?v8",
    "no_mouth": "https://github.githubassets.com/images/icons/emoji/unicode/1f636.png?v8",
    "no_pedestrians": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b7.png?v8",
    "no_smoking": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ad.png?v8",
    "non-potable_water": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b1.png?v8",
    "norfolk_island": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1eb.png?v8",
    "north_korea": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f5.png?v8",
    "northern_mariana_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f5.png?v8",
    "norway": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f4.png?v8",
    "nose": "https://github.githubassets.com/images/icons/emoji/unicode/1f443.png?v8",
    "notebook": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d3.png?v8",
    "notebook_with_decorative_cover": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d4.png?v8",
    "notes": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b6.png?v8",
    "nut_and_bolt": "https://github.githubassets.com/images/icons/emoji/unicode/1f529.png?v8",
    "o": "https://github.githubassets.com/images/icons/emoji/unicode/2b55.png?v8",
    "o2": "https://github.githubassets.com/images/icons/emoji/unicode/1f17e.png?v8",
    "ocean": "https://github.githubassets.com/images/icons/emoji/unicode/1f30a.png?v8",
    "octocat": "https://github.githubassets.com/images/icons/emoji/octocat.png?v8",
    "octopus": "https://github.githubassets.com/images/icons/emoji/unicode/1f419.png?v8",
    "oden": "https://github.githubassets.com/images/icons/emoji/unicode/1f362.png?v8",
    "office": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e2.png?v8",
    "office_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f4bc.png?v8",
    "oil_drum": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e2.png?v8",
    "ok": "https://github.githubassets.com/images/icons/emoji/unicode/1f197.png?v8",
    "ok_hand": "https://github.githubassets.com/images/icons/emoji/unicode/1f44c.png?v8",
    "ok_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f646-2642.png?v8",
    "ok_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f646.png?v8",
    "ok_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f646-2640.png?v8",
    "old_key": "https://github.githubassets.com/images/icons/emoji/unicode/1f5dd.png?v8",
    "older_adult": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d3.png?v8",
    "older_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f474.png?v8",
    "older_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f475.png?v8",
    "om": "https://github.githubassets.com/images/icons/emoji/unicode/1f549.png?v8",
    "oman": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f4-1f1f2.png?v8",
    "on": "https://github.githubassets.com/images/icons/emoji/unicode/1f51b.png?v8",
    "oncoming_automobile": "https://github.githubassets.com/images/icons/emoji/unicode/1f698.png?v8",
    "oncoming_bus": "https://github.githubassets.com/images/icons/emoji/unicode/1f68d.png?v8",
    "oncoming_police_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f694.png?v8",
    "oncoming_taxi": "https://github.githubassets.com/images/icons/emoji/unicode/1f696.png?v8",
    "one": "https://github.githubassets.com/images/icons/emoji/unicode/0031-20e3.png?v8",
    "one_piece_swimsuit": "https://github.githubassets.com/images/icons/emoji/unicode/1fa71.png?v8",
    "onion": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c5.png?v8",
    "open_book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png?v8",
    "open_file_folder": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c2.png?v8",
    "open_hands": "https://github.githubassets.com/images/icons/emoji/unicode/1f450.png?v8",
    "open_mouth": "https://github.githubassets.com/images/icons/emoji/unicode/1f62e.png?v8",
    "open_umbrella": "https://github.githubassets.com/images/icons/emoji/unicode/2602.png?v8",
    "ophiuchus": "https://github.githubassets.com/images/icons/emoji/unicode/26ce.png?v8",
    "orange": "https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8",
    "orange_book": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d9.png?v8",
    "orange_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e0.png?v8",
    "orange_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e1.png?v8",
    "orange_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e7.png?v8",
    "orangutan": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a7.png?v8",
    "orthodox_cross": "https://github.githubassets.com/images/icons/emoji/unicode/2626.png?v8",
    "otter": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a6.png?v8",
    "outbox_tray": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e4.png?v8",
    "owl": "https://github.githubassets.com/images/icons/emoji/unicode/1f989.png?v8",
    "ox": "https://github.githubassets.com/images/icons/emoji/unicode/1f402.png?v8",
    "oyster": "https://github.githubassets.com/images/icons/emoji/unicode/1f9aa.png?v8",
    "package": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e6.png?v8",
    "page_facing_up": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c4.png?v8",
    "page_with_curl": "https://github.githubassets.com/images/icons/emoji/unicode/1f4c3.png?v8",
    "pager": "https://github.githubassets.com/images/icons/emoji/unicode/1f4df.png?v8",
    "paintbrush": "https://github.githubassets.com/images/icons/emoji/unicode/1f58c.png?v8",
    "pakistan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f0.png?v8",
    "palau": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1fc.png?v8",
    "palestinian_territories": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f8.png?v8",
    "palm_tree": "https://github.githubassets.com/images/icons/emoji/unicode/1f334.png?v8",
    "palms_up_together": "https://github.githubassets.com/images/icons/emoji/unicode/1f932.png?v8",
    "panama": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1e6.png?v8",
    "pancakes": "https://github.githubassets.com/images/icons/emoji/unicode/1f95e.png?v8",
    "panda_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f43c.png?v8",
    "paperclip": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ce.png?v8",
    "paperclips": "https://github.githubassets.com/images/icons/emoji/unicode/1f587.png?v8",
    "papua_new_guinea": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ec.png?v8",
    "parachute": "https://github.githubassets.com/images/icons/emoji/unicode/1fa82.png?v8",
    "paraguay": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1fe.png?v8",
    "parasol_on_ground": "https://github.githubassets.com/images/icons/emoji/unicode/26f1.png?v8",
    "parking": "https://github.githubassets.com/images/icons/emoji/unicode/1f17f.png?v8",
    "parrot": "https://github.githubassets.com/images/icons/emoji/unicode/1f99c.png?v8",
    "part_alternation_mark": "https://github.githubassets.com/images/icons/emoji/unicode/303d.png?v8",
    "partly_sunny": "https://github.githubassets.com/images/icons/emoji/unicode/26c5.png?v8",
    "partying_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f973.png?v8",
    "passenger_ship": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f3.png?v8",
    "passport_control": "https://github.githubassets.com/images/icons/emoji/unicode/1f6c2.png?v8",
    "pause_button": "https://github.githubassets.com/images/icons/emoji/unicode/23f8.png?v8",
    "paw_prints": "https://github.githubassets.com/images/icons/emoji/unicode/1f43e.png?v8",
    "peace_symbol": "https://github.githubassets.com/images/icons/emoji/unicode/262e.png?v8",
    "peach": "https://github.githubassets.com/images/icons/emoji/unicode/1f351.png?v8",
    "peacock": "https://github.githubassets.com/images/icons/emoji/unicode/1f99a.png?v8",
    "peanuts": "https://github.githubassets.com/images/icons/emoji/unicode/1f95c.png?v8",
    "pear": "https://github.githubassets.com/images/icons/emoji/unicode/1f350.png?v8",
    "pen": "https://github.githubassets.com/images/icons/emoji/unicode/1f58a.png?v8",
    "pencil": "https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png?v8",
    "pencil2": "https://github.githubassets.com/images/icons/emoji/unicode/270f.png?v8",
    "penguin": "https://github.githubassets.com/images/icons/emoji/unicode/1f427.png?v8",
    "pensive": "https://github.githubassets.com/images/icons/emoji/unicode/1f614.png?v8",
    "people_holding_hands": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f91d-1f9d1.png?v8",
    "performing_arts": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ad.png?v8",
    "persevere": "https://github.githubassets.com/images/icons/emoji/unicode/1f623.png?v8",
    "person_bald": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b2.png?v8",
    "person_curly_hair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b1.png?v8",
    "person_fencing": "https://github.githubassets.com/images/icons/emoji/unicode/1f93a.png?v8",
    "person_in_manual_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9bd.png?v8",
    "person_in_motorized_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9bc.png?v8",
    "person_red_hair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b0.png?v8",
    "person_white_hair": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b3.png?v8",
    "person_with_probing_cane": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9af.png?v8",
    "person_with_turban": "https://github.githubassets.com/images/icons/emoji/unicode/1f473.png?v8",
    "peru": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ea.png?v8",
    "petri_dish": "https://github.githubassets.com/images/icons/emoji/unicode/1f9eb.png?v8",
    "philippines": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ed.png?v8",
    "phone": "https://github.githubassets.com/images/icons/emoji/unicode/260e.png?v8",
    "pick": "https://github.githubassets.com/images/icons/emoji/unicode/26cf.png?v8",
    "pie": "https://github.githubassets.com/images/icons/emoji/unicode/1f967.png?v8",
    "pig": "https://github.githubassets.com/images/icons/emoji/unicode/1f437.png?v8",
    "pig2": "https://github.githubassets.com/images/icons/emoji/unicode/1f416.png?v8",
    "pig_nose": "https://github.githubassets.com/images/icons/emoji/unicode/1f43d.png?v8",
    "pill": "https://github.githubassets.com/images/icons/emoji/unicode/1f48a.png?v8",
    "pilot": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2708.png?v8",
    "pinching_hand": "https://github.githubassets.com/images/icons/emoji/unicode/1f90f.png?v8",
    "pineapple": "https://github.githubassets.com/images/icons/emoji/unicode/1f34d.png?v8",
    "ping_pong": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d3.png?v8",
    "pirate_flag": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-2620.png?v8",
    "pisces": "https://github.githubassets.com/images/icons/emoji/unicode/2653.png?v8",
    "pitcairn_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f3.png?v8",
    "pizza": "https://github.githubassets.com/images/icons/emoji/unicode/1f355.png?v8",
    "place_of_worship": "https://github.githubassets.com/images/icons/emoji/unicode/1f6d0.png?v8",
    "plate_with_cutlery": "https://github.githubassets.com/images/icons/emoji/unicode/1f37d.png?v8",
    "play_or_pause_button": "https://github.githubassets.com/images/icons/emoji/unicode/23ef.png?v8",
    "pleading_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f97a.png?v8",
    "point_down": "https://github.githubassets.com/images/icons/emoji/unicode/1f447.png?v8",
    "point_left": "https://github.githubassets.com/images/icons/emoji/unicode/1f448.png?v8",
    "point_right": "https://github.githubassets.com/images/icons/emoji/unicode/1f449.png?v8",
    "point_up": "https://github.githubassets.com/images/icons/emoji/unicode/261d.png?v8",
    "point_up_2": "https://github.githubassets.com/images/icons/emoji/unicode/1f446.png?v8",
    "poland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f1.png?v8",
    "police_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f693.png?v8",
    "police_officer": "https://github.githubassets.com/images/icons/emoji/unicode/1f46e.png?v8",
    "policeman": "https://github.githubassets.com/images/icons/emoji/unicode/1f46e-2642.png?v8",
    "policewoman": "https://github.githubassets.com/images/icons/emoji/unicode/1f46e-2640.png?v8",
    "poodle": "https://github.githubassets.com/images/icons/emoji/unicode/1f429.png?v8",
    "poop": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8",
    "popcorn": "https://github.githubassets.com/images/icons/emoji/unicode/1f37f.png?v8",
    "portugal": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f9.png?v8",
    "post_office": "https://github.githubassets.com/images/icons/emoji/unicode/1f3e3.png?v8",
    "postal_horn": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ef.png?v8",
    "postbox": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ee.png?v8",
    "potable_water": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b0.png?v8",
    "potato": "https://github.githubassets.com/images/icons/emoji/unicode/1f954.png?v8",
    "pouch": "https://github.githubassets.com/images/icons/emoji/unicode/1f45d.png?v8",
    "poultry_leg": "https://github.githubassets.com/images/icons/emoji/unicode/1f357.png?v8",
    "pound": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b7.png?v8",
    "pout": "https://github.githubassets.com/images/icons/emoji/unicode/1f621.png?v8",
    "pouting_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f63e.png?v8",
    "pouting_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f64e.png?v8",
    "pouting_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f64e-2642.png?v8",
    "pouting_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f64e-2640.png?v8",
    "pray": "https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png?v8",
    "prayer_beads": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ff.png?v8",
    "pregnant_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f930.png?v8",
    "pretzel": "https://github.githubassets.com/images/icons/emoji/unicode/1f968.png?v8",
    "previous_track_button": "https://github.githubassets.com/images/icons/emoji/unicode/23ee.png?v8",
    "prince": "https://github.githubassets.com/images/icons/emoji/unicode/1f934.png?v8",
    "princess": "https://github.githubassets.com/images/icons/emoji/unicode/1f478.png?v8",
    "printer": "https://github.githubassets.com/images/icons/emoji/unicode/1f5a8.png?v8",
    "probing_cane": "https://github.githubassets.com/images/icons/emoji/unicode/1f9af.png?v8",
    "puerto_rico": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f7.png?v8",
    "punch": "https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8",
    "purple_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e3.png?v8",
    "purple_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png?v8",
    "purple_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7ea.png?v8",
    "purse": "https://github.githubassets.com/images/icons/emoji/unicode/1f45b.png?v8",
    "pushpin": "https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png?v8",
    "put_litter_in_its_place": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ae.png?v8",
    "qatar": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f6-1f1e6.png?v8",
    "question": "https://github.githubassets.com/images/icons/emoji/unicode/2753.png?v8",
    "rabbit": "https://github.githubassets.com/images/icons/emoji/unicode/1f430.png?v8",
    "rabbit2": "https://github.githubassets.com/images/icons/emoji/unicode/1f407.png?v8",
    "raccoon": "https://github.githubassets.com/images/icons/emoji/unicode/1f99d.png?v8",
    "racehorse": "https://github.githubassets.com/images/icons/emoji/unicode/1f40e.png?v8",
    "racing_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ce.png?v8",
    "radio": "https://github.githubassets.com/images/icons/emoji/unicode/1f4fb.png?v8",
    "radio_button": "https://github.githubassets.com/images/icons/emoji/unicode/1f518.png?v8",
    "radioactive": "https://github.githubassets.com/images/icons/emoji/unicode/2622.png?v8",
    "rage": "https://github.githubassets.com/images/icons/emoji/unicode/1f621.png?v8",
    "rage1": "https://github.githubassets.com/images/icons/emoji/rage1.png?v8",
    "rage2": "https://github.githubassets.com/images/icons/emoji/rage2.png?v8",
    "rage3": "https://github.githubassets.com/images/icons/emoji/rage3.png?v8",
    "rage4": "https://github.githubassets.com/images/icons/emoji/rage4.png?v8",
    "railway_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f683.png?v8",
    "railway_track": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e4.png?v8",
    "rainbow": "https://github.githubassets.com/images/icons/emoji/unicode/1f308.png?v8",
    "rainbow_flag": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f3-1f308.png?v8",
    "raised_back_of_hand": "https://github.githubassets.com/images/icons/emoji/unicode/1f91a.png?v8",
    "raised_eyebrow": "https://github.githubassets.com/images/icons/emoji/unicode/1f928.png?v8",
    "raised_hand": "https://github.githubassets.com/images/icons/emoji/unicode/270b.png?v8",
    "raised_hand_with_fingers_splayed": "https://github.githubassets.com/images/icons/emoji/unicode/1f590.png?v8",
    "raised_hands": "https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png?v8",
    "raising_hand": "https://github.githubassets.com/images/icons/emoji/unicode/1f64b.png?v8",
    "raising_hand_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f64b-2642.png?v8",
    "raising_hand_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f64b-2640.png?v8",
    "ram": "https://github.githubassets.com/images/icons/emoji/unicode/1f40f.png?v8",
    "ramen": "https://github.githubassets.com/images/icons/emoji/unicode/1f35c.png?v8",
    "rat": "https://github.githubassets.com/images/icons/emoji/unicode/1f400.png?v8",
    "razor": "https://github.githubassets.com/images/icons/emoji/unicode/1fa92.png?v8",
    "receipt": "https://github.githubassets.com/images/icons/emoji/unicode/1f9fe.png?v8",
    "record_button": "https://github.githubassets.com/images/icons/emoji/unicode/23fa.png?v8",
    "recycle": "https://github.githubassets.com/images/icons/emoji/unicode/267b.png?v8",
    "red_car": "https://github.githubassets.com/images/icons/emoji/unicode/1f697.png?v8",
    "red_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f534.png?v8",
    "red_envelope": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e7.png?v8",
    "red_haired_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b0.png?v8",
    "red_haired_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b0.png?v8",
    "red_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e5.png?v8",
    "registered": "https://github.githubassets.com/images/icons/emoji/unicode/00ae.png?v8",
    "relaxed": "https://github.githubassets.com/images/icons/emoji/unicode/263a.png?v8",
    "relieved": "https://github.githubassets.com/images/icons/emoji/unicode/1f60c.png?v8",
    "reminder_ribbon": "https://github.githubassets.com/images/icons/emoji/unicode/1f397.png?v8",
    "repeat": "https://github.githubassets.com/images/icons/emoji/unicode/1f501.png?v8",
    "repeat_one": "https://github.githubassets.com/images/icons/emoji/unicode/1f502.png?v8",
    "rescue_worker_helmet": "https://github.githubassets.com/images/icons/emoji/unicode/26d1.png?v8",
    "restroom": "https://github.githubassets.com/images/icons/emoji/unicode/1f6bb.png?v8",
    "reunion": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1ea.png?v8",
    "revolving_hearts": "https://github.githubassets.com/images/icons/emoji/unicode/1f49e.png?v8",
    "rewind": "https://github.githubassets.com/images/icons/emoji/unicode/23ea.png?v8",
    "rhinoceros": "https://github.githubassets.com/images/icons/emoji/unicode/1f98f.png?v8",
    "ribbon": "https://github.githubassets.com/images/icons/emoji/unicode/1f380.png?v8",
    "rice": "https://github.githubassets.com/images/icons/emoji/unicode/1f35a.png?v8",
    "rice_ball": "https://github.githubassets.com/images/icons/emoji/unicode/1f359.png?v8",
    "rice_cracker": "https://github.githubassets.com/images/icons/emoji/unicode/1f358.png?v8",
    "rice_scene": "https://github.githubassets.com/images/icons/emoji/unicode/1f391.png?v8",
    "right_anger_bubble": "https://github.githubassets.com/images/icons/emoji/unicode/1f5ef.png?v8",
    "ring": "https://github.githubassets.com/images/icons/emoji/unicode/1f48d.png?v8",
    "ringed_planet": "https://github.githubassets.com/images/icons/emoji/unicode/1fa90.png?v8",
    "robot": "https://github.githubassets.com/images/icons/emoji/unicode/1f916.png?v8",
    "rocket": "https://github.githubassets.com/images/icons/emoji/unicode/1f680.png?v8",
    "rofl": "https://github.githubassets.com/images/icons/emoji/unicode/1f923.png?v8",
    "roll_eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f644.png?v8",
    "roll_of_paper": "https://github.githubassets.com/images/icons/emoji/unicode/1f9fb.png?v8",
    "roller_coaster": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a2.png?v8",
    "romania": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1f4.png?v8",
    "rooster": "https://github.githubassets.com/images/icons/emoji/unicode/1f413.png?v8",
    "rose": "https://github.githubassets.com/images/icons/emoji/unicode/1f339.png?v8",
    "rosette": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f5.png?v8",
    "rotating_light": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a8.png?v8",
    "round_pushpin": "https://github.githubassets.com/images/icons/emoji/unicode/1f4cd.png?v8",
    "rowboat": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a3.png?v8",
    "rowing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a3-2642.png?v8",
    "rowing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a3-2640.png?v8",
    "ru": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1fa.png?v8",
    "rugby_football": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c9.png?v8",
    "runner": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c3.png?v8",
    "running": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c3.png?v8",
    "running_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c3-2642.png?v8",
    "running_shirt_with_sash": "https://github.githubassets.com/images/icons/emoji/unicode/1f3bd.png?v8",
    "running_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c3-2640.png?v8",
    "rwanda": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1fc.png?v8",
    "sa": "https://github.githubassets.com/images/icons/emoji/unicode/1f202.png?v8",
    "safety_pin": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f7.png?v8",
    "safety_vest": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ba.png?v8",
    "sagittarius": "https://github.githubassets.com/images/icons/emoji/unicode/2650.png?v8",
    "sailboat": "https://github.githubassets.com/images/icons/emoji/unicode/26f5.png?v8",
    "sake": "https://github.githubassets.com/images/icons/emoji/unicode/1f376.png?v8",
    "salt": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c2.png?v8",
    "samoa": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fc-1f1f8.png?v8",
    "san_marino": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f2.png?v8",
    "sandal": "https://github.githubassets.com/images/icons/emoji/unicode/1f461.png?v8",
    "sandwich": "https://github.githubassets.com/images/icons/emoji/unicode/1f96a.png?v8",
    "santa": "https://github.githubassets.com/images/icons/emoji/unicode/1f385.png?v8",
    "sao_tome_principe": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f9.png?v8",
    "sari": "https://github.githubassets.com/images/icons/emoji/unicode/1f97b.png?v8",
    "sassy_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f481-2642.png?v8",
    "sassy_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f481-2640.png?v8",
    "satellite": "https://github.githubassets.com/images/icons/emoji/unicode/1f4e1.png?v8",
    "satisfied": "https://github.githubassets.com/images/icons/emoji/unicode/1f606.png?v8",
    "saudi_arabia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e6.png?v8",
    "sauna_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d6-2642.png?v8",
    "sauna_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d6.png?v8",
    "sauna_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d6-2640.png?v8",
    "sauropod": "https://github.githubassets.com/images/icons/emoji/unicode/1f995.png?v8",
    "saxophone": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b7.png?v8",
    "scarf": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e3.png?v8",
    "school": "https://github.githubassets.com/images/icons/emoji/unicode/1f3eb.png?v8",
    "school_satchel": "https://github.githubassets.com/images/icons/emoji/unicode/1f392.png?v8",
    "scientist": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f52c.png?v8",
    "scissors": "https://github.githubassets.com/images/icons/emoji/unicode/2702.png?v8",
    "scorpion": "https://github.githubassets.com/images/icons/emoji/unicode/1f982.png?v8",
    "scorpius": "https://github.githubassets.com/images/icons/emoji/unicode/264f.png?v8",
    "scotland": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png?v8",
    "scream": "https://github.githubassets.com/images/icons/emoji/unicode/1f631.png?v8",
    "scream_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f640.png?v8",
    "scroll": "https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png?v8",
    "seat": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ba.png?v8",
    "secret": "https://github.githubassets.com/images/icons/emoji/unicode/3299.png?v8",
    "see_no_evil": "https://github.githubassets.com/images/icons/emoji/unicode/1f648.png?v8",
    "seedling": "https://github.githubassets.com/images/icons/emoji/unicode/1f331.png?v8",
    "selfie": "https://github.githubassets.com/images/icons/emoji/unicode/1f933.png?v8",
    "senegal": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f3.png?v8",
    "serbia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1f8.png?v8",
    "service_dog": "https://github.githubassets.com/images/icons/emoji/unicode/1f415-1f9ba.png?v8",
    "seven": "https://github.githubassets.com/images/icons/emoji/unicode/0037-20e3.png?v8",
    "seychelles": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e8.png?v8",
    "shallow_pan_of_food": "https://github.githubassets.com/images/icons/emoji/unicode/1f958.png?v8",
    "shamrock": "https://github.githubassets.com/images/icons/emoji/unicode/2618.png?v8",
    "shark": "https://github.githubassets.com/images/icons/emoji/unicode/1f988.png?v8",
    "shaved_ice": "https://github.githubassets.com/images/icons/emoji/unicode/1f367.png?v8",
    "sheep": "https://github.githubassets.com/images/icons/emoji/unicode/1f411.png?v8",
    "shell": "https://github.githubassets.com/images/icons/emoji/unicode/1f41a.png?v8",
    "shield": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e1.png?v8",
    "shinto_shrine": "https://github.githubassets.com/images/icons/emoji/unicode/26e9.png?v8",
    "ship": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a2.png?v8",
    "shipit": "https://github.githubassets.com/images/icons/emoji/shipit.png?v8",
    "shirt": "https://github.githubassets.com/images/icons/emoji/unicode/1f455.png?v8",
    "shit": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8",
    "shoe": "https://github.githubassets.com/images/icons/emoji/unicode/1f45e.png?v8",
    "shopping": "https://github.githubassets.com/images/icons/emoji/unicode/1f6cd.png?v8",
    "shopping_cart": "https://github.githubassets.com/images/icons/emoji/unicode/1f6d2.png?v8",
    "shorts": "https://github.githubassets.com/images/icons/emoji/unicode/1fa73.png?v8",
    "shower": "https://github.githubassets.com/images/icons/emoji/unicode/1f6bf.png?v8",
    "shrimp": "https://github.githubassets.com/images/icons/emoji/unicode/1f990.png?v8",
    "shrug": "https://github.githubassets.com/images/icons/emoji/unicode/1f937.png?v8",
    "shushing_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f92b.png?v8",
    "sierra_leone": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f1.png?v8",
    "signal_strength": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f6.png?v8",
    "singapore": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ec.png?v8",
    "singer": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3a4.png?v8",
    "sint_maarten": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fd.png?v8",
    "six": "https://github.githubassets.com/images/icons/emoji/unicode/0036-20e3.png?v8",
    "six_pointed_star": "https://github.githubassets.com/images/icons/emoji/unicode/1f52f.png?v8",
    "skateboard": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f9.png?v8",
    "ski": "https://github.githubassets.com/images/icons/emoji/unicode/1f3bf.png?v8",
    "skier": "https://github.githubassets.com/images/icons/emoji/unicode/26f7.png?v8",
    "skull": "https://github.githubassets.com/images/icons/emoji/unicode/1f480.png?v8",
    "skull_and_crossbones": "https://github.githubassets.com/images/icons/emoji/unicode/2620.png?v8",
    "skunk": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a8.png?v8",
    "sled": "https://github.githubassets.com/images/icons/emoji/unicode/1f6f7.png?v8",
    "sleeping": "https://github.githubassets.com/images/icons/emoji/unicode/1f634.png?v8",
    "sleeping_bed": "https://github.githubassets.com/images/icons/emoji/unicode/1f6cc.png?v8",
    "sleepy": "https://github.githubassets.com/images/icons/emoji/unicode/1f62a.png?v8",
    "slightly_frowning_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f641.png?v8",
    "slightly_smiling_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f642.png?v8",
    "slot_machine": "https://github.githubassets.com/images/icons/emoji/unicode/1f3b0.png?v8",
    "sloth": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a5.png?v8",
    "slovakia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f0.png?v8",
    "slovenia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ee.png?v8",
    "small_airplane": "https://github.githubassets.com/images/icons/emoji/unicode/1f6e9.png?v8",
    "small_blue_diamond": "https://github.githubassets.com/images/icons/emoji/unicode/1f539.png?v8",
    "small_orange_diamond": "https://github.githubassets.com/images/icons/emoji/unicode/1f538.png?v8",
    "small_red_triangle": "https://github.githubassets.com/images/icons/emoji/unicode/1f53a.png?v8",
    "small_red_triangle_down": "https://github.githubassets.com/images/icons/emoji/unicode/1f53b.png?v8",
    "smile": "https://github.githubassets.com/images/icons/emoji/unicode/1f604.png?v8",
    "smile_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f638.png?v8",
    "smiley": "https://github.githubassets.com/images/icons/emoji/unicode/1f603.png?v8",
    "smiley_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f63a.png?v8",
    "smiling_face_with_three_hearts": "https://github.githubassets.com/images/icons/emoji/unicode/1f970.png?v8",
    "smiling_imp": "https://github.githubassets.com/images/icons/emoji/unicode/1f608.png?v8",
    "smirk": "https://github.githubassets.com/images/icons/emoji/unicode/1f60f.png?v8",
    "smirk_cat": "https://github.githubassets.com/images/icons/emoji/unicode/1f63c.png?v8",
    "smoking": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ac.png?v8",
    "snail": "https://github.githubassets.com/images/icons/emoji/unicode/1f40c.png?v8",
    "snake": "https://github.githubassets.com/images/icons/emoji/unicode/1f40d.png?v8",
    "sneezing_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f927.png?v8",
    "snowboarder": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c2.png?v8",
    "snowflake": "https://github.githubassets.com/images/icons/emoji/unicode/2744.png?v8",
    "snowman": "https://github.githubassets.com/images/icons/emoji/unicode/26c4.png?v8",
    "snowman_with_snow": "https://github.githubassets.com/images/icons/emoji/unicode/2603.png?v8",
    "soap": "https://github.githubassets.com/images/icons/emoji/unicode/1f9fc.png?v8",
    "sob": "https://github.githubassets.com/images/icons/emoji/unicode/1f62d.png?v8",
    "soccer": "https://github.githubassets.com/images/icons/emoji/unicode/26bd.png?v8",
    "socks": "https://github.githubassets.com/images/icons/emoji/unicode/1f9e6.png?v8",
    "softball": "https://github.githubassets.com/images/icons/emoji/unicode/1f94e.png?v8",
    "solomon_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e7.png?v8",
    "somalia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f4.png?v8",
    "soon": "https://github.githubassets.com/images/icons/emoji/unicode/1f51c.png?v8",
    "sos": "https://github.githubassets.com/images/icons/emoji/unicode/1f198.png?v8",
    "sound": "https://github.githubassets.com/images/icons/emoji/unicode/1f509.png?v8",
    "south_africa": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1e6.png?v8",
    "south_georgia_south_sandwich_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f8.png?v8",
    "south_sudan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f8.png?v8",
    "space_invader": "https://github.githubassets.com/images/icons/emoji/unicode/1f47e.png?v8",
    "spades": "https://github.githubassets.com/images/icons/emoji/unicode/2660.png?v8",
    "spaghetti": "https://github.githubassets.com/images/icons/emoji/unicode/1f35d.png?v8",
    "sparkle": "https://github.githubassets.com/images/icons/emoji/unicode/2747.png?v8",
    "sparkler": "https://github.githubassets.com/images/icons/emoji/unicode/1f387.png?v8",
    "sparkles": "https://github.githubassets.com/images/icons/emoji/unicode/2728.png?v8",
    "sparkling_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f496.png?v8",
    "speak_no_evil": "https://github.githubassets.com/images/icons/emoji/unicode/1f64a.png?v8",
    "speaker": "https://github.githubassets.com/images/icons/emoji/unicode/1f508.png?v8",
    "speaking_head": "https://github.githubassets.com/images/icons/emoji/unicode/1f5e3.png?v8",
    "speech_balloon": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png?v8",
    "speedboat": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a4.png?v8",
    "spider": "https://github.githubassets.com/images/icons/emoji/unicode/1f577.png?v8",
    "spider_web": "https://github.githubassets.com/images/icons/emoji/unicode/1f578.png?v8",
    "spiral_calendar": "https://github.githubassets.com/images/icons/emoji/unicode/1f5d3.png?v8",
    "spiral_notepad": "https://github.githubassets.com/images/icons/emoji/unicode/1f5d2.png?v8",
    "sponge": "https://github.githubassets.com/images/icons/emoji/unicode/1f9fd.png?v8",
    "spoon": "https://github.githubassets.com/images/icons/emoji/unicode/1f944.png?v8",
    "squid": "https://github.githubassets.com/images/icons/emoji/unicode/1f991.png?v8",
    "sri_lanka": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f0.png?v8",
    "st_barthelemy": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f1.png?v8",
    "st_helena": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ed.png?v8",
    "st_kitts_nevis": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f3.png?v8",
    "st_lucia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e8.png?v8",
    "st_martin": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1eb.png?v8",
    "st_pierre_miquelon": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f2.png?v8",
    "st_vincent_grenadines": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1e8.png?v8",
    "stadium": "https://github.githubassets.com/images/icons/emoji/unicode/1f3df.png?v8",
    "standing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cd-2642.png?v8",
    "standing_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cd.png?v8",
    "standing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9cd-2640.png?v8",
    "star": "https://github.githubassets.com/images/icons/emoji/unicode/2b50.png?v8",
    "star2": "https://github.githubassets.com/images/icons/emoji/unicode/1f31f.png?v8",
    "star_and_crescent": "https://github.githubassets.com/images/icons/emoji/unicode/262a.png?v8",
    "star_of_david": "https://github.githubassets.com/images/icons/emoji/unicode/2721.png?v8",
    "star_struck": "https://github.githubassets.com/images/icons/emoji/unicode/1f929.png?v8",
    "stars": "https://github.githubassets.com/images/icons/emoji/unicode/1f320.png?v8",
    "station": "https://github.githubassets.com/images/icons/emoji/unicode/1f689.png?v8",
    "statue_of_liberty": "https://github.githubassets.com/images/icons/emoji/unicode/1f5fd.png?v8",
    "steam_locomotive": "https://github.githubassets.com/images/icons/emoji/unicode/1f682.png?v8",
    "stethoscope": "https://github.githubassets.com/images/icons/emoji/unicode/1fa7a.png?v8",
    "stew": "https://github.githubassets.com/images/icons/emoji/unicode/1f372.png?v8",
    "stop_button": "https://github.githubassets.com/images/icons/emoji/unicode/23f9.png?v8",
    "stop_sign": "https://github.githubassets.com/images/icons/emoji/unicode/1f6d1.png?v8",
    "stopwatch": "https://github.githubassets.com/images/icons/emoji/unicode/23f1.png?v8",
    "straight_ruler": "https://github.githubassets.com/images/icons/emoji/unicode/1f4cf.png?v8",
    "strawberry": "https://github.githubassets.com/images/icons/emoji/unicode/1f353.png?v8",
    "stuck_out_tongue": "https://github.githubassets.com/images/icons/emoji/unicode/1f61b.png?v8",
    "stuck_out_tongue_closed_eyes": "https://github.githubassets.com/images/icons/emoji/unicode/1f61d.png?v8",
    "stuck_out_tongue_winking_eye": "https://github.githubassets.com/images/icons/emoji/unicode/1f61c.png?v8",
    "student": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f393.png?v8",
    "studio_microphone": "https://github.githubassets.com/images/icons/emoji/unicode/1f399.png?v8",
    "stuffed_flatbread": "https://github.githubassets.com/images/icons/emoji/unicode/1f959.png?v8",
    "sudan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e9.png?v8",
    "sun_behind_large_cloud": "https://github.githubassets.com/images/icons/emoji/unicode/1f325.png?v8",
    "sun_behind_rain_cloud": "https://github.githubassets.com/images/icons/emoji/unicode/1f326.png?v8",
    "sun_behind_small_cloud": "https://github.githubassets.com/images/icons/emoji/unicode/1f324.png?v8",
    "sun_with_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f31e.png?v8",
    "sunflower": "https://github.githubassets.com/images/icons/emoji/unicode/1f33b.png?v8",
    "sunglasses": "https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png?v8",
    "sunny": "https://github.githubassets.com/images/icons/emoji/unicode/2600.png?v8",
    "sunrise": "https://github.githubassets.com/images/icons/emoji/unicode/1f305.png?v8",
    "sunrise_over_mountains": "https://github.githubassets.com/images/icons/emoji/unicode/1f304.png?v8",
    "superhero": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b8.png?v8",
    "superhero_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b8-2642.png?v8",
    "superhero_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b8-2640.png?v8",
    "supervillain": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b9.png?v8",
    "supervillain_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b9-2642.png?v8",
    "supervillain_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b9-2640.png?v8",
    "surfer": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c4.png?v8",
    "surfing_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c4-2642.png?v8",
    "surfing_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c4-2640.png?v8",
    "suriname": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f7.png?v8",
    "sushi": "https://github.githubassets.com/images/icons/emoji/unicode/1f363.png?v8",
    "suspect": "https://github.githubassets.com/images/icons/emoji/suspect.png?v8",
    "suspension_railway": "https://github.githubassets.com/images/icons/emoji/unicode/1f69f.png?v8",
    "svalbard_jan_mayen": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ef.png?v8",
    "swan": "https://github.githubassets.com/images/icons/emoji/unicode/1f9a2.png?v8",
    "swaziland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ff.png?v8",
    "sweat": "https://github.githubassets.com/images/icons/emoji/unicode/1f613.png?v8",
    "sweat_drops": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a6.png?v8",
    "sweat_smile": "https://github.githubassets.com/images/icons/emoji/unicode/1f605.png?v8",
    "sweden": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ea.png?v8",
    "sweet_potato": "https://github.githubassets.com/images/icons/emoji/unicode/1f360.png?v8",
    "swim_brief": "https://github.githubassets.com/images/icons/emoji/unicode/1fa72.png?v8",
    "swimmer": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ca.png?v8",
    "swimming_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ca-2642.png?v8",
    "swimming_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ca-2640.png?v8",
    "switzerland": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ed.png?v8",
    "symbols": "https://github.githubassets.com/images/icons/emoji/unicode/1f523.png?v8",
    "synagogue": "https://github.githubassets.com/images/icons/emoji/unicode/1f54d.png?v8",
    "syria": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fe.png?v8",
    "syringe": "https://github.githubassets.com/images/icons/emoji/unicode/1f489.png?v8",
    "t-rex": "https://github.githubassets.com/images/icons/emoji/unicode/1f996.png?v8",
    "taco": "https://github.githubassets.com/images/icons/emoji/unicode/1f32e.png?v8",
    "tada": "https://github.githubassets.com/images/icons/emoji/unicode/1f389.png?v8",
    "taiwan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1fc.png?v8",
    "tajikistan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ef.png?v8",
    "takeout_box": "https://github.githubassets.com/images/icons/emoji/unicode/1f961.png?v8",
    "tanabata_tree": "https://github.githubassets.com/images/icons/emoji/unicode/1f38b.png?v8",
    "tangerine": "https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8",
    "tanzania": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ff.png?v8",
    "taurus": "https://github.githubassets.com/images/icons/emoji/unicode/2649.png?v8",
    "taxi": "https://github.githubassets.com/images/icons/emoji/unicode/1f695.png?v8",
    "tea": "https://github.githubassets.com/images/icons/emoji/unicode/1f375.png?v8",
    "teacher": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3eb.png?v8",
    "technologist": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f4bb.png?v8",
    "teddy_bear": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f8.png?v8",
    "telephone": "https://github.githubassets.com/images/icons/emoji/unicode/260e.png?v8",
    "telephone_receiver": "https://github.githubassets.com/images/icons/emoji/unicode/1f4de.png?v8",
    "telescope": "https://github.githubassets.com/images/icons/emoji/unicode/1f52d.png?v8",
    "tennis": "https://github.githubassets.com/images/icons/emoji/unicode/1f3be.png?v8",
    "tent": "https://github.githubassets.com/images/icons/emoji/unicode/26fa.png?v8",
    "test_tube": "https://github.githubassets.com/images/icons/emoji/unicode/1f9ea.png?v8",
    "thailand": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ed.png?v8",
    "thermometer": "https://github.githubassets.com/images/icons/emoji/unicode/1f321.png?v8",
    "thinking": "https://github.githubassets.com/images/icons/emoji/unicode/1f914.png?v8",
    "thought_balloon": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png?v8",
    "thread": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f5.png?v8",
    "three": "https://github.githubassets.com/images/icons/emoji/unicode/0033-20e3.png?v8",
    "thumbsdown": "https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8",
    "thumbsup": "https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8",
    "ticket": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ab.png?v8",
    "tickets": "https://github.githubassets.com/images/icons/emoji/unicode/1f39f.png?v8",
    "tiger": "https://github.githubassets.com/images/icons/emoji/unicode/1f42f.png?v8",
    "tiger2": "https://github.githubassets.com/images/icons/emoji/unicode/1f405.png?v8",
    "timer_clock": "https://github.githubassets.com/images/icons/emoji/unicode/23f2.png?v8",
    "timor_leste": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f1.png?v8",
    "tipping_hand_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f481-2642.png?v8",
    "tipping_hand_person": "https://github.githubassets.com/images/icons/emoji/unicode/1f481.png?v8",
    "tipping_hand_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f481-2640.png?v8",
    "tired_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f62b.png?v8",
    "tm": "https://github.githubassets.com/images/icons/emoji/unicode/2122.png?v8",
    "togo": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ec.png?v8",
    "toilet": "https://github.githubassets.com/images/icons/emoji/unicode/1f6bd.png?v8",
    "tokelau": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f0.png?v8",
    "tokyo_tower": "https://github.githubassets.com/images/icons/emoji/unicode/1f5fc.png?v8",
    "tomato": "https://github.githubassets.com/images/icons/emoji/unicode/1f345.png?v8",
    "tonga": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f4.png?v8",
    "tongue": "https://github.githubassets.com/images/icons/emoji/unicode/1f445.png?v8",
    "toolbox": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f0.png?v8",
    "tooth": "https://github.githubassets.com/images/icons/emoji/unicode/1f9b7.png?v8",
    "top": "https://github.githubassets.com/images/icons/emoji/unicode/1f51d.png?v8",
    "tophat": "https://github.githubassets.com/images/icons/emoji/unicode/1f3a9.png?v8",
    "tornado": "https://github.githubassets.com/images/icons/emoji/unicode/1f32a.png?v8",
    "tr": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f7.png?v8",
    "trackball": "https://github.githubassets.com/images/icons/emoji/unicode/1f5b2.png?v8",
    "tractor": "https://github.githubassets.com/images/icons/emoji/unicode/1f69c.png?v8",
    "traffic_light": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a5.png?v8",
    "train": "https://github.githubassets.com/images/icons/emoji/unicode/1f68b.png?v8",
    "train2": "https://github.githubassets.com/images/icons/emoji/unicode/1f686.png?v8",
    "tram": "https://github.githubassets.com/images/icons/emoji/unicode/1f68a.png?v8",
    "triangular_flag_on_post": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a9.png?v8",
    "triangular_ruler": "https://github.githubassets.com/images/icons/emoji/unicode/1f4d0.png?v8",
    "trident": "https://github.githubassets.com/images/icons/emoji/unicode/1f531.png?v8",
    "trinidad_tobago": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f9.png?v8",
    "tristan_da_cunha": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e6.png?v8",
    "triumph": "https://github.githubassets.com/images/icons/emoji/unicode/1f624.png?v8",
    "trolleybus": "https://github.githubassets.com/images/icons/emoji/unicode/1f68e.png?v8",
    "trollface": "https://github.githubassets.com/images/icons/emoji/trollface.png?v8",
    "trophy": "https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png?v8",
    "tropical_drink": "https://github.githubassets.com/images/icons/emoji/unicode/1f379.png?v8",
    "tropical_fish": "https://github.githubassets.com/images/icons/emoji/unicode/1f420.png?v8",
    "truck": "https://github.githubassets.com/images/icons/emoji/unicode/1f69a.png?v8",
    "trumpet": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ba.png?v8",
    "tshirt": "https://github.githubassets.com/images/icons/emoji/unicode/1f455.png?v8",
    "tulip": "https://github.githubassets.com/images/icons/emoji/unicode/1f337.png?v8",
    "tumbler_glass": "https://github.githubassets.com/images/icons/emoji/unicode/1f943.png?v8",
    "tunisia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f3.png?v8",
    "turkey": "https://github.githubassets.com/images/icons/emoji/unicode/1f983.png?v8",
    "turkmenistan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f2.png?v8",
    "turks_caicos_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e8.png?v8",
    "turtle": "https://github.githubassets.com/images/icons/emoji/unicode/1f422.png?v8",
    "tuvalu": "https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1fb.png?v8",
    "tv": "https://github.githubassets.com/images/icons/emoji/unicode/1f4fa.png?v8",
    "twisted_rightwards_arrows": "https://github.githubassets.com/images/icons/emoji/unicode/1f500.png?v8",
    "two": "https://github.githubassets.com/images/icons/emoji/unicode/0032-20e3.png?v8",
    "two_hearts": "https://github.githubassets.com/images/icons/emoji/unicode/1f495.png?v8",
    "two_men_holding_hands": "https://github.githubassets.com/images/icons/emoji/unicode/1f46c.png?v8",
    "two_women_holding_hands": "https://github.githubassets.com/images/icons/emoji/unicode/1f46d.png?v8",
    "u5272": "https://github.githubassets.com/images/icons/emoji/unicode/1f239.png?v8",
    "u5408": "https://github.githubassets.com/images/icons/emoji/unicode/1f234.png?v8",
    "u55b6": "https://github.githubassets.com/images/icons/emoji/unicode/1f23a.png?v8",
    "u6307": "https://github.githubassets.com/images/icons/emoji/unicode/1f22f.png?v8",
    "u6708": "https://github.githubassets.com/images/icons/emoji/unicode/1f237.png?v8",
    "u6709": "https://github.githubassets.com/images/icons/emoji/unicode/1f236.png?v8",
    "u6e80": "https://github.githubassets.com/images/icons/emoji/unicode/1f235.png?v8",
    "u7121": "https://github.githubassets.com/images/icons/emoji/unicode/1f21a.png?v8",
    "u7533": "https://github.githubassets.com/images/icons/emoji/unicode/1f238.png?v8",
    "u7981": "https://github.githubassets.com/images/icons/emoji/unicode/1f232.png?v8",
    "u7a7a": "https://github.githubassets.com/images/icons/emoji/unicode/1f233.png?v8",
    "uganda": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1ec.png?v8",
    "uk": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v8",
    "ukraine": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png?v8",
    "umbrella": "https://github.githubassets.com/images/icons/emoji/unicode/2614.png?v8",
    "unamused": "https://github.githubassets.com/images/icons/emoji/unicode/1f612.png?v8",
    "underage": "https://github.githubassets.com/images/icons/emoji/unicode/1f51e.png?v8",
    "unicorn": "https://github.githubassets.com/images/icons/emoji/unicode/1f984.png?v8",
    "united_arab_emirates": "https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ea.png?v8",
    "united_nations": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f3.png?v8",
    "unlock": "https://github.githubassets.com/images/icons/emoji/unicode/1f513.png?v8",
    "up": "https://github.githubassets.com/images/icons/emoji/unicode/1f199.png?v8",
    "upside_down_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f643.png?v8",
    "uruguay": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1fe.png?v8",
    "us": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f8.png?v8",
    "us_outlying_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f2.png?v8",
    "us_virgin_islands": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ee.png?v8",
    "uzbekistan": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1ff.png?v8",
    "v": "https://github.githubassets.com/images/icons/emoji/unicode/270c.png?v8",
    "vampire": "https://github.githubassets.com/images/icons/emoji/unicode/1f9db.png?v8",
    "vampire_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9db-2642.png?v8",
    "vampire_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9db-2640.png?v8",
    "vanuatu": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1fa.png?v8",
    "vatican_city": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1e6.png?v8",
    "venezuela": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ea.png?v8",
    "vertical_traffic_light": "https://github.githubassets.com/images/icons/emoji/unicode/1f6a6.png?v8",
    "vhs": "https://github.githubassets.com/images/icons/emoji/unicode/1f4fc.png?v8",
    "vibration_mode": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f3.png?v8",
    "video_camera": "https://github.githubassets.com/images/icons/emoji/unicode/1f4f9.png?v8",
    "video_game": "https://github.githubassets.com/images/icons/emoji/unicode/1f3ae.png?v8",
    "vietnam": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1f3.png?v8",
    "violin": "https://github.githubassets.com/images/icons/emoji/unicode/1f3bb.png?v8",
    "virgo": "https://github.githubassets.com/images/icons/emoji/unicode/264d.png?v8",
    "volcano": "https://github.githubassets.com/images/icons/emoji/unicode/1f30b.png?v8",
    "volleyball": "https://github.githubassets.com/images/icons/emoji/unicode/1f3d0.png?v8",
    "vomiting_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f92e.png?v8",
    "vs": "https://github.githubassets.com/images/icons/emoji/unicode/1f19a.png?v8",
    "vulcan_salute": "https://github.githubassets.com/images/icons/emoji/unicode/1f596.png?v8",
    "waffle": "https://github.githubassets.com/images/icons/emoji/unicode/1f9c7.png?v8",
    "wales": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png?v8",
    "walking": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b6.png?v8",
    "walking_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b6-2642.png?v8",
    "walking_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f6b6-2640.png?v8",
    "wallis_futuna": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fc-1f1eb.png?v8",
    "waning_crescent_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f318.png?v8",
    "waning_gibbous_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f316.png?v8",
    "warning": "https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8",
    "wastebasket": "https://github.githubassets.com/images/icons/emoji/unicode/1f5d1.png?v8",
    "watch": "https://github.githubassets.com/images/icons/emoji/unicode/231a.png?v8",
    "water_buffalo": "https://github.githubassets.com/images/icons/emoji/unicode/1f403.png?v8",
    "water_polo": "https://github.githubassets.com/images/icons/emoji/unicode/1f93d.png?v8",
    "watermelon": "https://github.githubassets.com/images/icons/emoji/unicode/1f349.png?v8",
    "wave": "https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png?v8",
    "wavy_dash": "https://github.githubassets.com/images/icons/emoji/unicode/3030.png?v8",
    "waxing_crescent_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f312.png?v8",
    "waxing_gibbous_moon": "https://github.githubassets.com/images/icons/emoji/unicode/1f314.png?v8",
    "wc": "https://github.githubassets.com/images/icons/emoji/unicode/1f6be.png?v8",
    "weary": "https://github.githubassets.com/images/icons/emoji/unicode/1f629.png?v8",
    "wedding": "https://github.githubassets.com/images/icons/emoji/unicode/1f492.png?v8",
    "weight_lifting": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cb.png?v8",
    "weight_lifting_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cb-2642.png?v8",
    "weight_lifting_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f3cb-2640.png?v8",
    "western_sahara": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ed.png?v8",
    "whale": "https://github.githubassets.com/images/icons/emoji/unicode/1f433.png?v8",
    "whale2": "https://github.githubassets.com/images/icons/emoji/unicode/1f40b.png?v8",
    "wheel_of_dharma": "https://github.githubassets.com/images/icons/emoji/unicode/2638.png?v8",
    "wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/267f.png?v8",
    "white_check_mark": "https://github.githubassets.com/images/icons/emoji/unicode/2705.png?v8",
    "white_circle": "https://github.githubassets.com/images/icons/emoji/unicode/26aa.png?v8",
    "white_flag": "https://github.githubassets.com/images/icons/emoji/unicode/1f3f3.png?v8",
    "white_flower": "https://github.githubassets.com/images/icons/emoji/unicode/1f4ae.png?v8",
    "white_haired_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b3.png?v8",
    "white_haired_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b3.png?v8",
    "white_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f90d.png?v8",
    "white_large_square": "https://github.githubassets.com/images/icons/emoji/unicode/2b1c.png?v8",
    "white_medium_small_square": "https://github.githubassets.com/images/icons/emoji/unicode/25fd.png?v8",
    "white_medium_square": "https://github.githubassets.com/images/icons/emoji/unicode/25fb.png?v8",
    "white_small_square": "https://github.githubassets.com/images/icons/emoji/unicode/25ab.png?v8",
    "white_square_button": "https://github.githubassets.com/images/icons/emoji/unicode/1f533.png?v8",
    "wilted_flower": "https://github.githubassets.com/images/icons/emoji/unicode/1f940.png?v8",
    "wind_chime": "https://github.githubassets.com/images/icons/emoji/unicode/1f390.png?v8",
    "wind_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f32c.png?v8",
    "wine_glass": "https://github.githubassets.com/images/icons/emoji/unicode/1f377.png?v8",
    "wink": "https://github.githubassets.com/images/icons/emoji/unicode/1f609.png?v8",
    "wolf": "https://github.githubassets.com/images/icons/emoji/unicode/1f43a.png?v8",
    "woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f469.png?v8",
    "woman_artist": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3a8.png?v8",
    "woman_astronaut": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f680.png?v8",
    "woman_cartwheeling": "https://github.githubassets.com/images/icons/emoji/unicode/1f938-2640.png?v8",
    "woman_cook": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f373.png?v8",
    "woman_dancing": "https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8",
    "woman_facepalming": "https://github.githubassets.com/images/icons/emoji/unicode/1f926-2640.png?v8",
    "woman_factory_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3ed.png?v8",
    "woman_farmer": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f33e.png?v8",
    "woman_firefighter": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f692.png?v8",
    "woman_health_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2695.png?v8",
    "woman_in_manual_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9bd.png?v8",
    "woman_in_motorized_wheelchair": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9bc.png?v8",
    "woman_judge": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2696.png?v8",
    "woman_juggling": "https://github.githubassets.com/images/icons/emoji/unicode/1f939-2640.png?v8",
    "woman_mechanic": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f527.png?v8",
    "woman_office_worker": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f4bc.png?v8",
    "woman_pilot": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-2708.png?v8",
    "woman_playing_handball": "https://github.githubassets.com/images/icons/emoji/unicode/1f93e-2640.png?v8",
    "woman_playing_water_polo": "https://github.githubassets.com/images/icons/emoji/unicode/1f93d-2640.png?v8",
    "woman_scientist": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f52c.png?v8",
    "woman_shrugging": "https://github.githubassets.com/images/icons/emoji/unicode/1f937-2640.png?v8",
    "woman_singer": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3a4.png?v8",
    "woman_student": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f393.png?v8",
    "woman_teacher": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3eb.png?v8",
    "woman_technologist": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f4bb.png?v8",
    "woman_with_headscarf": "https://github.githubassets.com/images/icons/emoji/unicode/1f9d5.png?v8",
    "woman_with_probing_cane": "https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9af.png?v8",
    "woman_with_turban": "https://github.githubassets.com/images/icons/emoji/unicode/1f473-2640.png?v8",
    "womans_clothes": "https://github.githubassets.com/images/icons/emoji/unicode/1f45a.png?v8",
    "womans_hat": "https://github.githubassets.com/images/icons/emoji/unicode/1f452.png?v8",
    "women_wrestling": "https://github.githubassets.com/images/icons/emoji/unicode/1f93c-2640.png?v8",
    "womens": "https://github.githubassets.com/images/icons/emoji/unicode/1f6ba.png?v8",
    "woozy_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f974.png?v8",
    "world_map": "https://github.githubassets.com/images/icons/emoji/unicode/1f5fa.png?v8",
    "worried": "https://github.githubassets.com/images/icons/emoji/unicode/1f61f.png?v8",
    "wrench": "https://github.githubassets.com/images/icons/emoji/unicode/1f527.png?v8",
    "wrestling": "https://github.githubassets.com/images/icons/emoji/unicode/1f93c.png?v8",
    "writing_hand": "https://github.githubassets.com/images/icons/emoji/unicode/270d.png?v8",
    "x": "https://github.githubassets.com/images/icons/emoji/unicode/274c.png?v8",
    "yarn": "https://github.githubassets.com/images/icons/emoji/unicode/1f9f6.png?v8",
    "yawning_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f971.png?v8",
    "yellow_circle": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e1.png?v8",
    "yellow_heart": "https://github.githubassets.com/images/icons/emoji/unicode/1f49b.png?v8",
    "yellow_square": "https://github.githubassets.com/images/icons/emoji/unicode/1f7e8.png?v8",
    "yemen": "https://github.githubassets.com/images/icons/emoji/unicode/1f1fe-1f1ea.png?v8",
    "yen": "https://github.githubassets.com/images/icons/emoji/unicode/1f4b4.png?v8",
    "yin_yang": "https://github.githubassets.com/images/icons/emoji/unicode/262f.png?v8",
    "yo_yo": "https://github.githubassets.com/images/icons/emoji/unicode/1fa80.png?v8",
    "yum": "https://github.githubassets.com/images/icons/emoji/unicode/1f60b.png?v8",
    "zambia": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1f2.png?v8",
    "zany_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f92a.png?v8",
    "zap": "https://github.githubassets.com/images/icons/emoji/unicode/26a1.png?v8",
    "zebra": "https://github.githubassets.com/images/icons/emoji/unicode/1f993.png?v8",
    "zero": "https://github.githubassets.com/images/icons/emoji/unicode/0030-20e3.png?v8",
    "zimbabwe": "https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1fc.png?v8",
    "zipper_mouth_face": "https://github.githubassets.com/images/icons/emoji/unicode/1f910.png?v8",
    "zombie": "https://github.githubassets.com/images/icons/emoji/unicode/1f9df.png?v8",
    "zombie_man": "https://github.githubassets.com/images/icons/emoji/unicode/1f9df-2642.png?v8",
    "zombie_woman": "https://github.githubassets.com/images/icons/emoji/unicode/1f9df-2640.png?v8",
    "zzz": "https://github.githubassets.com/images/icons/emoji/unicode/1f4a4.png?v8"
}


// REPLACER.JS

var preFuncs = {
    "lowerCase": function(vl){return vl.toLowerCase();},
    "upperCase": function(vl){return vl.toUpperCase();},
    "strip": function(vl){return vl.trim();},
    "emoji": function(vl){return emojiImg(vl);},
    "id": function(vl){
        vl = vl.replaceAll(/:[a-z0-9_]+:/g, "");
        vl = vl.trim().replaceAll(/[\.\/\*\']/g, "").replaceAll(" ", "-").toLowerCase();//.replaceAll(" ", "-").replaceAll(".", "").replaceAll("/", "").toLowerCase();
        return vl;
    },
    "checkBox": function(vl){
        if (vl == "x") return emojiImg("heavy_check_mark");
        return emojiImg("x");
    },
    "len": function(vl){
        let len = vl.length;
        if (len > 3) return 3;
        return len;
    }
}

function rplcReg(str, reg, temp, maxIters=-1, dict={}) {
    // finds variable names from temp
    var tempVars = matchAll(temp, /\$[a-zA-Z0-9\.]+\$/g, /[\$]/g);

    var iter = 0;
    while (true) {
        if (iter == maxIters || iter > 1000) break;
        iter++;
        var tempCopy = temp;
        var match = reg.exec(str);
        if (match == null) break; // no more matches

        if (str.startsWith("buffer times")) {
            console.log(match);
        }

        //runs through all variables from temp
        for (let i = 0; i < tempVars.length; i++) {
            // searching for advanced variables (title.length...)
            var tempVar = tempVars[i].split("."); 
            var var0 = tempVar[0];
            var value = match.groups[var0];
            
            // runs through all variable parameters (.length, .id, .emoji ...)
            for (let vrI = 1; vrI < tempVar.length; vrI++) {
                value = value[tempVar[vrI]]; //finds matching parameter
                
                // if parameter does not exists
                if (value == undefined) {
                    var subFunc = dict[tempVars[i]]; // try to find function from user defined functions

                    // if user did not define this function
                    // try to find function from pre defined functions
                    if (subFunc == undefined) {
                        subFunc = preFuncs[tempVar[vrI]]; // when even this does not match that crash
                    }
                    // rewrite value to its default
                    value = match.groups[var0];
                    // runs found function
                    value = subFunc(value);
                }
            }
            // inserts value
            tempCopy = tempCopy.replaceAll(`\$${tempVars[i]}\$`, value);
        }
        str = str.replaceAt(match.index, match[0], tempCopy);
    }
    return str;
}

function matchFirst(str, reg, replace="", to="") {
    var arr = str.match(reg);
    if (arr == null) return str;
    if (replace == "") return arr[0];
    return arr[0].replaceAll(replace, to);
}

function matchAll(str, reg, replace="", to="") {
    var arr = str.match(reg);
    if (arr == null) return [];
    if (replace == "") return arr;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replaceAll(replace, to);
    }
    return arr;
}

// cool funkce
String.prototype.replaceAt = function(index, what, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + what.length);
}

function emojiImg(emoji) {
    if (EMOJIS[emoji] == null) return emoji;
    var emojiObj = createElement("img", null, "", [
        {"name": "src", "value": EMOJIS[emoji]},
        {"name": "class", "value": "emojiImg"}
    ]);

    return emojiObj.outerHTML;
}


// MDCONVERTER.JS

var debug = false;

function convert(str) {
    var mdDiv = document.getElementById("md");
    clearTable(mdDiv);

    // hrefs within md document -> [title](#headerId) 
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>#.*)\)/g, '<a href="$href.lowerCase$">$title$</a>');
    
    // hrefs to another sites -> [title](url)
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>.*)\)/g, '<a href="$href$" target=_blank>$title$</a>');

    // images -> ![title](imgSrc)
    str = rplcReg(str, /\!\[(?<title>.*)\]\((?<src>.*)\)/g, '<img src="$src$" title=$title$>');
    
    // urls
    str = rplcReg(str, /(?<url>(?<!"|'|>)https*\:\/\/[a-zA-Z0-9\#\/\.\:\%\-]*)(?!"|'|<)/, '<a href="$url.strip$" target=_blank>$url.strip$</a>');

    // one line codes -> `code` | ```code```
    str = rplcReg(str, /\`{1,3}(?<code>[a-zA-Z0-9\#\@\&\?\/\:\=\"\'\(\)\.\,\*\[\]\%\{\}\- ]+)\`{1,3}/g, "<code>$code$</code>");
    
    // check boxes -> [ ] || [x]
    str = rplcReg(str, /\[(?<checkBox>[ x])\]/g, "$checkBox.checkBox$");

    // contents
    //str = rplcReg()

    // list -> - something
    str = rplcReg(str, /^((?<![a-zA-Z0-9])(?<spaces>[ ]*)- )(?<li>.*)/gm, "<li style=margin-left:$spaces.length$%;>$li$</li>");

    // numbered list
    str = rplcReg(str, /^((?<![a-zA-Z0-9])(?<spaces>[ ]*)(?<number>[0-9\.]+).{1} )(?<li>.*)/gm, "<li style=margin-left:$spaces.length$%; class='numberedList'>$number$. $li$</li>");

    //str = str.rplcRegAll(/(?<!\")[ ]*https\:\/\/.*(?=!<\/) /g, urls);
    str = rplcReg(str, /\`{3}(?<codeType>[a-z]+)/g, "<pre class=language-$codeType$>");
    str = rplcReg(str, /\`{3}/g, "</pre>");

    mdDiv.innerHTML = str;

    formatCode();

    str = mdDiv.innerHTML;

    str = headers(str);

    /** emojis -> :emoji:
     * list in emojis.js (https://github.com/KubaBoi/CheeseFramework/blob/webServices/mdConverter/emojis.js)
     * credit https://github.com/privatenumber/gh-emojis
     */
    str = rplcReg(str, /:(?<emoji>[a-z0-9_\-\+]+):/g, "$emoji.emoji$");

    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.match(/^(\<)/) == null) {
            if (i < lines.length-1) {
                if (line == "" && lines[i+1] != "") {
                    str += "<br><br>";
                    continue;
                }
                else if (lines[i+1] == "") {
                    str += `${line}<br><br>`
                    i++;
                    continue;
                }
            }
            str += line;
        }
        else {
            if (line.match(/\<pre.*/) != null) {
                while (line.match(/\<\/pre\>/) == null) {
                    str += line + "\n";
                    line = lines[++i];
                }
            }
            str += line;
        }
    }

    mdDiv.innerHTML = str;

    contents();
    changeWelcome();
    images();

    window.addEventListener("load", scrollToAfter);
}

function headers(str) {
    var lines = str.split("\n");

    var newStr = "";
    var paragraph = "";
    var parId = "";

    var mouseEvents = ""; // "onmouseover=onScrollDiv(this) onmousemove=onScrollDiv(this)";

    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.startsWith("#")) {
            if (paragraph != "") {
                newStr += `<div id=${parId}Id ${mouseEvents}>${paragraph}</div>`;
                paragraph = "";
            }
            parId = rplcReg(line, /((?<!\>)(?<hdr>#+)) (?<title>.*)/g, "$title.id$");
            line = rplcReg(line, /((?<!\>)(?<hdr>#+)) (?<title>.*)/g, "<h$hdr.len$ id=$title.id$>$title$</h$hdr.len$>");
            if (line.startsWith("<h1") || line.startsWith("<h2")) {
                line += "<hr>";
            }
        }
        paragraph += line + "\n";
    }
    newStr += `<div id=${parId}Id ${mouseEvents}>${paragraph}</div>`;
    return newStr;
}

function contents() {
    var contentsDiv = document.getElementById("contentsId");
    if (contentsDiv == null) return;
    contentsDiv.remove();
    contentsDiv.classList.add("contents");

    var cont = contentsDiv.innerHTML;
    var lines = cont.split("<br>")[2].split("</li>");

    contentsDiv.innerHTML = "<p>Contents</p>";
    
    for (let i = 0; i < lines.length; i++) {
        var index = rplcReg(lines[i], /.*\<a href="#(?<index>\d+)-.*/, "$index$");
        var dotIndex = "";
        for (let o = 0; o < index.length; o++) {
            dotIndex += index[o] + ".";
        }
        var line = lines[i].split("<a");
        contentsDiv.innerHTML += `${line[0]}${dotIndex} <a${line[1]}</li>`;
    }

    document.body.appendChild(contentsDiv);
}

function images() {
    var imgs = document.body.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        if (!img.classList.contains("emojiImg")) {
            img.classList.add("contentImg");
        }
    }
}

function scrollToAfter() {
    let url = new URL(window.location.href);
    let hash = url.hash;
    if (hash != "") {
        window.location = hash;
    }
}


// GETMD.JS

var mdUrl = "";
async function getMd(url) {
    mdUrl = url;
    var response = await callEndpoint("GET", url);
    convert(response);
}

async function source() {
    var contentsDiv = document.getElementById("contentsId");
    var sourceDiv = document.getElementById("source");
    if (sourceDiv == null) {
        contentsDiv.style.visibility = "hidden";
        var d = document.getElementById("d");
        var sourceDiv = createElement("div", d, "", [
            {"name": "id", "value": "source"},
            {"name": "class", "value": "main"}
        ]);

        var response = await callEndpoint("GET", mdUrl);
        if (response.ERROR == null) {
            createElement("pre", sourceDiv, response);
        }
    }
    else {
        sourceDiv.remove();
        contentsDiv.style.visibility = "visible";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == "p") {
        source();
    }
}, false);


// ONSCROLLMAN.JS

function onScrollDiv(e) {
    
}


// CODEFORMATER.JS

function formatCode() {
    
    var pres = document.body.getElementsByTagName("pre");
    for (let i = 0; i < pres.length; i++) {
        var pre = pres[i];
        var clsList = pre.classList;

        if (clsList.contains("language-json")) {
            pre.innerHTML = formatJson(pre.innerHTML);
        }
        else if (clsList.contains("language-html")) {
            pre.innerHTML = formatHtml(pre.innerHTML);
        }
        else if (clsList.contains("language-assembler")) {
            pre.innerHTML = formatAsm(pre.innerHTML);
        }
        else {
            pre.innerHTML = formatPython(pre.innerHTML);
        }
        /*else if (clsList.contains("language-sql")) {
            pre.innerHTML = formatSql(pre.innerHTML);
        }*/
    }
}


// ASSEMBLER.JS

var varsAsm = ["DB", "DW", "DD", "DQ", "DT", "RESB", "RESW", "RESD", "TIMES"];
var typesAsm = ["BYTE", "WORD", "DWORD", "QWORD", "TBYTE"];
var regsAsm = ["AL", "AH", "SI", "DI", "AX", "EAX", "RAX"];

var instAsm = [
    "MOV", "JMP", "JZ", 
    "CMP", 
    "LODSB", "LODSW", "LODSD", 
    "INC", "DEC", "ADD", "SUB",
    "RET"];

function formatAsm(str) {

    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // one line comments
        line = rplcReg(line, /(?<!\>)(?<comment>;.*)/, "<span class=comment>$comment$</span>", 1);
     
        for (let o = 0; o < varsAsm.length; o++) {
            let vr = varsAsm[o];
            let re = new RegExp(`(?<vr>${vr}|${vr.toLowerCase()}) (?<value>[a-zA-Z0-9]+)`);
            line = rplcReg(line, re, `<span class=keyword>$vr.upperCase$</span> <span class=class>$value$</span>`, 1);
        }

        for (let o = 0; o < typesAsm.length; o++) {
            let type = typesAsm[o];
            let re = new RegExp(` (?<type>${type}|${type.toLowerCase()}) `);
            line = rplcReg(line, re,  " <span class=function_variable>$type.lowerCase$</span> ", 1);
        }

        for (let o = 0; o < instAsm.length; o++) {
            let inst = instAsm[o];
            let re = new RegExp(`(?<inst>${inst}|${inst.toLowerCase()})`);
            line = rplcReg(line, re,  "<span class=multiline_comment>$inst.upperCase$</span>", 1);
        }

        for (let o = 0; o < regsAsm.length; o++) {
            let reg = regsAsm[o];
            let re = new RegExp(` (?<reg>${reg}|${reg.toLowerCase()}) `);
            line = rplcReg(line, re,  " <span class=annotation>$reg.upperCase$</span> ", 1);

            re = new RegExp(` (?<reg>${reg}|${reg.toLowerCase()}),`);
            line = rplcReg(line, re,  " <span class=annotation>$reg.upperCase$</span>,", 1);
        }

        str += line + "<br>";
    }

    return str;
} 


// PYTHON.JS

function formatPython(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // multiline comment
        rsp = multiLine(lines, '"""', '"""', "multiline_comment", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }
        // cheese annotations
        rsp = multiLine(lines, "#@", ";", "cheese_annotation", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }

        // from
        line = rplcReg(line, /^(?<kwFrom>from) (?<from>.+)/, "<span class=keyword>$kwFrom$</span> <span class=class>$from$</span> ", 1);
        //import
        line = rplcReg(line, /(?<kwImport>import) (?<import>.*)/,  "<span class=keyword>$kwImport$</span> <span class=class>$import$</span>", 1);
        // python annotation
        line = rplcReg(line, /(?<!#)(?<annot>@.*)/, "<span class=annotation>$annot$</span>", 1);
        // one line comments
        line = rplcReg(line, /(?<!\>)(?<comment>#.*)/, "<span class=comment>$comment$</span>", 1);

        //string
        line = rplcReg(line, /(?<str>"\w*")/g, "<span class=string>$str$</span>", 3);

        // class
        line = rplcReg(line, /class (?<class>\w+)\((?<parentClass>\w+)\):/, 
                    "<span class=keyword>class</span> <span class=class>$class$</span>(<span class=class>$parentClass$</span>):", 1,
                    {
                        "parentClass.args": function(vl){return args(vl, "class")}
                    });
        // def
        line = rplcReg(line, /def (?<def>\w+)\((?<variables>.*)\):/, 
                    "<span class=keyword>def</span> <span class=function>$def$</span>($variables.args$):", 1,
                    {
                        "variables.args": function(vl){return args(vl)}
                    });

        str += line + "<br>";
    }

    return str;
}

function multiLine(lines, start, end, cls, index) {
    var line = lines[index];
    if (!line.trim().startsWith(start)) return [line, index, false];

    // check if multiline is not in one line
    reg = RegExp(`${start}.*${end}`);
    if (reg.test(line)) {
        return [`<span class=${cls}>${line}</span><br>`, index, true];
    }
    
    var newStr = "";
    newStr += `<span class=${cls}>${line}<br>`;
    
    line = lines[++index];
    while (!line.trim().endsWith(end)) {
        newStr += line + "<br>";
        line = lines[++index];
    }
    newStr += `${line}</span><br>`;
    return [newStr, index, true];
}

function args(args, cls="function_variable") {
    argsArray = args.split(",");
    newStr = "";
    for (let i = 0; i < argsArray.length; i++) {
        newStr += `<span class=${cls}>${argsArray[i].trim()}</span>`
        if (i < argsArray.length - 1) {
            newStr += ", ";
        }
    }
    return newStr;
}



// HTML.JS

function formatHtml(str) {

    var lines = str.split("\n");
    str = "";

    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        
        line = line.replaceAll("<", "&lt;");
        line = line.replaceAll(">", "&gt;");

        line = line.replaceAll("&lt;script", "&lt;<span class=keyword>script</span>");
        line = line.replaceAll("&lt;/script&gt;", "&lt;<span class=keyword>/script</span>&gt;");

        line = rplcReg(line, /\&lt;\!--(?<comment>.*)--\&gt;/, "<span class=comment>&lt;!--$comment$--&gt;</span>");

        str += line + " <br>";
    }
    return str;
}


// JSON.JS

function formatJson(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // multiline comment
        rsp = multiLine(lines, "/*", "*/", "multiline_comment", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }

        line = rplcReg(line, /(?<key>".*"):(?<value>.*),*/, "<span class=keyword>$key$</span>: $value.getType$", 1,
        {
            "value.getType": function(vl){return getType(vl);}
        });

        // one line comments
        line = rplcReg(line, /(?<comment>\/\/.*)/, "<span class=comment>$comment$</span>", 1);

        str += line + "<br>";
    }

    return str;
}

function getType(value) {
    var regStr = RegExp(/".*"/);
    var regNum = RegExp(/\d+/);

    var cls = "bool";
    if (regStr.test(value)) cls = "string";
    else if (regNum.test(value)) cls = "number";

    var comma = "";
    if (value.trim().endsWith(",")) {
        comma = ",";
        value = value.slice(0, -1); 
    }

    var bracket = "";
    if (value.trim().startsWith("{")) {
        bracket = "{";
        value = value.replace("{", "");
    }
    var bracket = "";
    if (value.trim().startsWith("[")) {
        bracket = "[";
        value = value.replace("[", "");
    }

    return `${bracket}<span class=${cls}>${value.trim()}</span>${comma}`;
}


