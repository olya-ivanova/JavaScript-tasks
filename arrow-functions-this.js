const obj = {
    hero: "hero",
    a: function(){
        alert(this.hero);
    },
    b: () => alert(this.hero)
}

obj.a(); // prints hero, Object {...}
obj.b(); // prints undefined, Window {...}
