const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Física: 0},
	{pista: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{DodgeChallenger: 0},
	{Céu: 0},
	{setaPNG: 0}
];

self.InstanceType = {
	pista: class extends self.ISpriteInstance {},
	DodgeChallenger: class extends self.ISpriteInstance {},
	Céu: class extends self.ISpriteInstance {},
	setaPNG: class extends self.ISpriteInstance {}
}