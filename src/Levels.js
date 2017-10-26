function setResults(ref, label="", value="") {
	function getWeightclass(){
		var sex = stats.sex;
		var bw = stats.bodyweight;
		var weightclasses = levels[0][sex];
		var result = weightclasses[0].bodyweight;
		for (var i = 0; i < weightclasses.length-1; i++){
			if (bw > weightclasses[i].bodyweight){
				result = weightclasses[i+1].bodyweight;
			} 
		}
		return result > 0 ? result : result*-1+"+";
	}

	function getResults(){
		var result = {};
		var sex = stats.sex;
		result["weightclass"] = getWeightclass();
		var wci = wcIndexes[sex+result["weightclass"]];

		result.snatchLevel = 0;
		result.cleanAndJerkLevel = 0;
		result.backSquatLevel = 0;
		result.frontSquatLevel = 0;

		for (var i = 0; i < levels.length; i++){
			var level = levels[i][sex][wci];
			if (stats.snatch >= level.snatch)
				result.snatchLevel = i+1;
			if (stats.cleanAndJerk >= level.cleanAndJerk)
				result.cleanAndJerkLevel = i+1;
			if (stats.backSquat >= level.backSquat)
				result.backSquatLevel = i+1;
			if (stats.frontSquat >= level.frontSquat)
				result.frontSquatLevel = i+1;
		}

		result.snatchNext = result.snatchLevel < 7?
			levels[result.snatchLevel][sex][wci]["snatch"]: "MAX LEVEL REACHED";
		result.cleanAndJerkNext = result.cleanAndJerkLevel < 7?
			levels[result.cleanAndJerkLevel][sex][wci]["cleanAndJerk"]: "MAX LEVEL REACHED";
		result.backSquatNext = result.backSquatLevel < 7?
			levels[result.backSquatLevel][sex][wci]["backSquat"]: "MAX LEVEL REACHED";
		result.frontSquatNext = result.frontSquatLevel < 7?
			levels[result.frontSquatLevel][sex][wci]["frontSquat"]: "MAX LEVEL REACHED";

		return result;
	}

	var wcIndexes = {
		"men56": 0,
		"men62": 1,
		"men69": 2,
		"men77": 3,
		"men85": 4,
		"men94": 5,
		"men105": 6,
		"men105+": 7,
		"women48": 0,
		"women53": 1,
		"women58": 2,
		"women63": 3,
		"women69": 4,
		"women75": 5,
		"women75+": 6
	};

	var levels = [
		{
			men: [
				{
					bodyweight: 56,
					snatch: 48,
					cleanAndJerk: 59,
					backSquat: 75,
					frontSquat: 64
				},
				{
					bodyweight: 62,
					snatch: 53,
					cleanAndJerk: 65,
					backSquat: 83,
					frontSquat: 71
				},
				{
					bodyweight: 69,
					snatch: 57,
					cleanAndJerk: 70,
					backSquat: 89,
					frontSquat: 76
				},
				{
					bodyweight: 77,
					snatch: 61,
					cleanAndJerk: 75,
					backSquat: 95,
					frontSquat: 82
				},
				{
					bodyweight: 85,
					snatch: 64,
					cleanAndJerk: 79,
					backSquat: 100,
					frontSquat: 86
				},
				{
					bodyweight: 94,
					snatch: 67,
					cleanAndJerk: 82,
					backSquat: 105,
					frontSquat: 90
				},
				{
					bodyweight: 105,
					snatch: 70,
					cleanAndJerk: 86,
					backSquat: 109,
					frontSquat: 94
				},
				{
					bodyweight: -105,
					snatch: 75,
					cleanAndJerk: 92,
					backSquat: 117,
					frontSquat: 100
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 31,
					cleanAndJerk: 38,
					backSquat: 48,
					frontSquat: 41
				},
				{
					bodyweight: 53,
					snatch: 35,
					cleanAndJerk: 43,
					backSquat: 55,
					frontSquat: 47
				},
				{
					bodyweight: 58,
					snatch: 38,
					cleanAndJerk: 47,
					backSquat: 59,
					frontSquat: 51
				},
				{
					bodyweight: 63,
					snatch: 40,
					cleanAndJerk: 49,
					backSquat: 62,
					frontSquat: 54
				},
				{
					bodyweight: 69,
					snatch: 42,
					cleanAndJerk: 52,
					backSquat: 66,
					frontSquat: 56
				},
				{
					bodyweight: 75,
					snatch: 45,
					cleanAndJerk: 55,
					backSquat: 70,
					frontSquat: 60
				},
				{
					bodyweight: -75,
					snatch: 52,
					cleanAndJerk: 64,
					backSquat: 81,
					frontSquat: 70
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 64,
					cleanAndJerk: 79,
					backSquat: 100,
					frontSquat: 86
				},
				{
					bodyweight: 62,
					snatch: 71,
					cleanAndJerk: 87,
					backSquat: 111,
					frontSquat: 95
				},
				{
					bodyweight: 69,
					snatch: 75,
					cleanAndJerk: 92,
					backSquat: 117,
					frontSquat: 100
				},
				{
					bodyweight: 77,
					snatch: 80,
					cleanAndJerk: 98,
					backSquat: 125,
					frontSquat: 107
				},
				{
					bodyweight: 85,
					snatch: 85,
					cleanAndJerk: 105,
					backSquat: 133,
					frontSquat: 114
				},
				{
					bodyweight: 94,
					snatch: 89,
					cleanAndJerk: 109,
					backSquat: 139,
					frontSquat: 119
				},
				{
					bodyweight: 105,
					snatch: 92,
					cleanAndJerk: 113,
					backSquat: 144,
					frontSquat: 123
				},
				{
					bodyweight: -105,
					snatch: 99,
					cleanAndJerk: 122,
					backSquat: 155,
					frontSquat: 132
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 41,
					cleanAndJerk: 50,
					backSquat: 64,
					frontSquat: 55
				},
				{
					bodyweight: 53,
					snatch: 47,
					cleanAndJerk: 58,
					backSquat: 73,
					frontSquat: 63
				},
				{
					bodyweight: 58,
					snatch: 50,
					cleanAndJerk: 62,
					backSquat: 78,
					frontSquat: 67
				},
				{
					bodyweight: 63,
					snatch: 53,
					cleanAndJerk: 65,
					backSquat: 83,
					frontSquat: 71
				},
				{
					bodyweight: 69,
					snatch: 57,
					cleanAndJerk: 70,
					backSquat: 89,
					frontSquat: 76
				},
				{
					bodyweight: 75,
					snatch: 60,
					cleanAndJerk: 74,
					backSquat: 94,
					frontSquat: 80
				},
				{
					bodyweight: -75,
					snatch: 69,
					cleanAndJerk: 85,
					backSquat: 108,
					frontSquat: 92
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 71,
					cleanAndJerk: 86,
					backSquat: 110,
					frontSquat: 94
				},
				{
					bodyweight: 62,
					snatch: 78,
					cleanAndJerk: 95,
					backSquat: 121,
					frontSquat: 104
				},
				{
					bodyweight: 69,
					snatch: 86,
					cleanAndJerk: 105,
					backSquat: 133,
					frontSquat: 114
				},
				{
					bodyweight: 77,
					snatch: 94,
					cleanAndJerk: 115,
					backSquat: 146,
					frontSquat: 125
				},
				{
					bodyweight: 85,
					snatch: 101,
					cleanAndJerk: 124,
					backSquat: 158,
					frontSquat: 135
				},
				{
					bodyweight: 94,
					snatch: 105,
					cleanAndJerk: 128,
					backSquat: 163,
					frontSquat: 140
				},
				{
					bodyweight: 105,
					snatch: 108,
					cleanAndJerk: 133,
					backSquat: 169,
					frontSquat: 145
				},
				{
					bodyweight: -105,
					snatch: 117,
					cleanAndJerk: 144,
					backSquat: 183,
					frontSquat: 157
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 46,
					cleanAndJerk: 57,
					backSquat: 72,
					frontSquat: 62
				},
				{
					bodyweight: 53,
					snatch: 52,
					cleanAndJerk: 63,
					backSquat: 81,
					frontSquat: 69
				},
				{
					bodyweight: 58,
					snatch: 57,
					cleanAndJerk: 70,
					backSquat: 89,
					frontSquat: 76
				},
				{
					bodyweight: 63,
					snatch: 61,
					cleanAndJerk: 74,
					backSquat: 95,
					frontSquat: 81
				},
				{
					bodyweight: 69,
					snatch: 64,
					cleanAndJerk: 78,
					backSquat: 99,
					frontSquat: 85
				},
				{
					bodyweight: 75,
					snatch: 66,
					cleanAndJerk: 81,
					backSquat: 103,
					frontSquat: 88
				},
				{
					bodyweight: -75,
					snatch: 74,
					cleanAndJerk: 90,
					backSquat: 115,
					frontSquat: 98
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 77,
					cleanAndJerk: 94,
					backSquat: 119,
					frontSquat: 102
				},
				{
					bodyweight: 62,
					snatch: 85,
					cleanAndJerk: 104,
					backSquat: 132,
					frontSquat: 113
				},
				{
					bodyweight: 69,
					snatch: 96,
					cleanAndJerk: 117,
					backSquat: 149,
					frontSquat: 128
				},
				{
					bodyweight: 77,
					snatch: 108,
					cleanAndJerk: 132,
					backSquat: 168,
					frontSquat: 144
				},
				{
					bodyweight: 85,
					snatch: 117,
					cleanAndJerk: 142,
					backSquat: 181,
					frontSquat: 155
				},
				{
					bodyweight: 94,
					snatch: 120,
					cleanAndJerk: 147,
					backSquat: 187,
					frontSquat: 161
				},
				{
					bodyweight: 105,
					snatch: 124,
					cleanAndJerk: 152,
					backSquat: 194,
					frontSquat: 166
				},
				{
					bodyweight: -105,
					snatch: 135,
					cleanAndJerk: 165,
					backSquat: 210,
					frontSquat: 180
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 51,
					cleanAndJerk: 63,
					backSquat: 80,
					frontSquat: 68
				},
				{
					bodyweight: 53,
					snatch: 56,
					cleanAndJerk: 68,
					backSquat: 87,
					frontSquat: 75
				},
				{
					bodyweight: 58,
					snatch: 64,
					cleanAndJerk: 78,
					backSquat: 99,
					frontSquat: 85
				},
				{
					bodyweight: 63,
					snatch: 68,
					cleanAndJerk: 83,
					backSquat: 106,
					frontSquat: 91
				},
				{
					bodyweight: 69,
					snatch: 70,
					cleanAndJerk: 86,
					backSquat: 109,
					frontSquat: 93
				},
				{
					bodyweight: 75,
					snatch: 72,
					cleanAndJerk: 88,
					backSquat: 112,
					frontSquat: 96
				},
				{
					bodyweight: -75,
					snatch: 78,
					cleanAndJerk: 96,
					backSquat: 122,
					frontSquat: 104
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 90,
					cleanAndJerk: 110,
					backSquat: 140,
					frontSquat: 120
				},
				{
					bodyweight: 62,
					snatch: 110,
					cleanAndJerk: 135,
					backSquat: 171,
					frontSquat: 147
				},
				{
					bodyweight: 69,
					snatch: 125,
					cleanAndJerk: 153,
					backSquat: 195,
					frontSquat: 167
				},
				{
					bodyweight: 77,
					snatch: 137,
					cleanAndJerk: 168,
					backSquat: 213,
					frontSquat: 183
				},
				{
					bodyweight: 85,
					snatch: 147,
					cleanAndJerk: 179,
					backSquat: 228,
					frontSquat: 196
				},
				{
					bodyweight: 94,
					snatch: 154,
					cleanAndJerk: 189,
					backSquat: 240,
					frontSquat: 206
				},
				{
					bodyweight: 105,
					snatch: 158,
					cleanAndJerk: 193,
					backSquat: 245,
					frontSquat: 210
				},
				{
					bodyweight: -105,
					snatch: 169,
					cleanAndJerk: 207,
					backSquat: 263,
					frontSquat: 226
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 64,
					cleanAndJerk: 78,
					backSquat: 100,
					frontSquat: 86
				},
				{
					bodyweight: 53,
					snatch: 72,
					cleanAndJerk: 88,
					backSquat: 112,
					frontSquat: 96
				},
				{
					bodyweight: 58,
					snatch: 83,
					cleanAndJerk: 101,
					backSquat: 129,
					frontSquat: 111
				},
				{
					bodyweight: 63,
					snatch: 85,
					cleanAndJerk: 104,
					backSquat: 133,
					frontSquat: 114
				},
				{
					bodyweight: 69,
					snatch: 88,
					cleanAndJerk: 108,
					backSquat: 138,
					frontSquat: 117
				},
				{
					bodyweight: 75,
					snatch: 95,
					cleanAndJerk: 116,
					backSquat: 147,
					frontSquat: 126
				},
				{
					bodyweight: -75,
					snatch: 107,
					cleanAndJerk: 130,
					backSquat: 166,
					frontSquat: 142
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 110,
					cleanAndJerk: 135,
					backSquat: 172,
					frontSquat: 147
				},
				{
					bodyweight: 62,
					snatch: 127,
					cleanAndJerk: 155,
					backSquat: 197,
					frontSquat: 169
				},
				{
					bodyweight: 69,
					snatch: 133,
					cleanAndJerk: 163,
					backSquat: 207,
					frontSquat: 178
				},
				{
					bodyweight: 77,
					snatch: 151,
					cleanAndJerk: 184,
					backSquat: 235,
					frontSquat: 201
				},
				{
					bodyweight: 85,
					snatch: 160,
					cleanAndJerk: 196,
					backSquat: 249,
					frontSquat: 214
				},
				{
					bodyweight: 94,
					snatch: 168,
					cleanAndJerk: 206,
					backSquat: 262,
					frontSquat: 224
				},
				{
					bodyweight: 105,
					snatch: 172,
					cleanAndJerk: 211,
					backSquat: 268,
					frontSquat: 230
				},
				{
					bodyweight: -105,
					snatch: 186,
					cleanAndJerk: 228,
					backSquat: 290,
					frontSquat: 248
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 76,
					cleanAndJerk: 92,
					backSquat: 118,
					frontSquat: 101
				},
				{
					bodyweight: 53,
					snatch: 85,
					cleanAndJerk: 103,
					backSquat: 132,
					frontSquat: 113
				},
				{
					bodyweight: 58,
					snatch: 94,
					cleanAndJerk: 115,
					backSquat: 146,
					frontSquat: 125
				},
				{
					bodyweight: 63,
					snatch: 98,
					cleanAndJerk: 120,
					backSquat: 153,
					frontSquat: 131
				},
				{
					bodyweight: 69,
					snatch: 103,
					cleanAndJerk: 126,
					backSquat: 160,
					frontSquat: 137
				},
				{
					bodyweight: 75,
					snatch: 110,
					cleanAndJerk: 134,
					backSquat: 171,
					frontSquat: 146
				},
				{
					bodyweight: -75,
					snatch: 125,
					cleanAndJerk: 153,
					backSquat: 195,
					frontSquat: 167
				}
			]
		},
		{
			men: [
				{
					bodyweight: 56,
					snatch: 131,
					cleanAndJerk: 160,
					backSquat: 203,
					frontSquat: 174
				},
				{
					bodyweight: 62,
					snatch: 144,
					cleanAndJerk: 175,
					backSquat: 223,
					frontSquat: 191
				},
				{
					bodyweight: 69,
					snatch: 153,
					cleanAndJerk: 188,
					backSquat: 239,
					frontSquat: 205
				},
				{
					bodyweight: 77,
					snatch: 164,
					cleanAndJerk: 201,
					backSquat: 255,
					frontSquat: 219
				},
				{
					bodyweight: 85,
					snatch: 173,
					cleanAndJerk: 212,
					backSquat: 270,
					frontSquat: 231
				},
				{
					bodyweight: 94,
					snatch: 182,
					cleanAndJerk: 223,
					backSquat: 283,
					frontSquat: 243
				},
				{
					bodyweight: 105,
					snatch: 188,
					cleanAndJerk: 230,
					backSquat: 292,
					frontSquat: 250
				},
				{
					bodyweight: -105,
					snatch: 203,
					cleanAndJerk: 248,
					backSquat: 316,
					frontSquat: 271
				}
			],
			women: [
				{
					bodyweight: 48,
					snatch: 86,
					cleanAndJerk: 106,
					backSquat: 134,
					frontSquat: 115
				},
				{
					bodyweight: 53,
					snatch: 98,
					cleanAndJerk: 119,
					backSquat: 152,
					frontSquat: 130
				},
				{
					bodyweight: 58,
					snatch: 105,
					cleanAndJerk: 128,
					backSquat: 163,
					frontSquat: 140
				},
				{
					bodyweight: 63,
					snatch: 111,
					cleanAndJerk: 135,
					backSquat: 172,
					frontSquat: 148
				},
				{
					bodyweight: 69,
					snatch: 118,
					cleanAndJerk: 144,
					backSquat: 183,
					frontSquat: 157
				},
				{
					bodyweight: 75,
					snatch: 125,
					cleanAndJerk: 153,
					backSquat: 195,
					frontSquat: 167
				},
				{
					bodyweight: -75,
					snatch: 144,
					cleanAndJerk: 176,
					backSquat: 224,
					frontSquat: 192
				}
			]
		}
	];

	var stats = {
		sex: ref.state.sex,
		bodyweight: Number(ref.state.bodyweight),
		snatch: Number(ref.state.snatch),
		cleanAndJerk: Number(ref.state.cleanAndJerk),
		backSquat: Number(ref.state.backSquat),
		frontSquat: Number(ref.state.frontSquat)
	}

	if (label){
		stats[label] = value;
	}

	var result = getResults();

	ref.setState(result);
}

module.exports = setResults;