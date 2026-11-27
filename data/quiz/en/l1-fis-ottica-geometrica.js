QBANK("en", "l1-fis-ottica-geometrica", {
 "f": [
  { "type": "mc", "q": "How does light travel in a uniform, transparent medium?", "options": ["In a straight line", "In a zigzag", "In a circle"], "answer": 0, "explain": "In a uniform medium light travels in a straight line: this is the basis of geometrical optics." },
  { "type": "tf", "q": "A ray striking a plane mirror at an angle of 40° is reflected at an angle of 40°.", "answer": true, "explain": "Law of reflection: angle of reflection = angle of incidence." },
  { "type": "mc", "q": "Roughly what is the speed of light in a vacuum?", "options": ["300 m/s", "300 000 km/s", "30 000 km/s"], "answer": 1, "explain": "c ≈ 3.00 × 10^8 m/s = 300 000 km/s." },
  { "type": "text", "q": "What is the line perpendicular to the surface at the point where a ray arrives called?", "answer": ["normal", "the normal"], "explain": "The angles of incidence, reflection and refraction are measured from the normal." },
  { "type": "mc", "q": "What type of lens is used as a magnifying glass?", "options": ["Converging", "Diverging", "Neither"], "answer": 0, "explain": "A converging lens with the object between the lens and the focus gives a virtual, upright, enlarged image." }
 ],
 "m": [
  { "type": "num", "q": "A spherical mirror has a radius of curvature of 50 cm. What is its focal length (in cm, as an absolute value)?", "answer": 25, "unit": "cm", "explain": "f = R/2 = 25 cm." },
  { "type": "num", "q": "Calculate the refractive index of a material in which light travels at 2.0 × 10^8 m/s (c = 3.0 × 10^8 m/s).", "answer": 1.5, "tol": 0.01, "explain": "n = c/v = 1.5: the typical value for glass." },
  { "type": "mc", "q": "A ray passes from glass into air at an oblique angle. The refracted ray…", "options": ["bends towards the normal", "bends away from the normal", "keeps the same direction"], "answer": 1, "explain": "Going into a medium with a lower index, the ray bends away from the normal." },
  { "type": "num", "q": "A lens has a focal length of 50 cm (0.5 m). How many dioptres does it have?", "answer": 2, "unit": "D", "explain": "P = 1/f = 1/0.5 = 2 D." },
  { "type": "tf", "q": "The image in a plane mirror is real and inverted.", "answer": false, "explain": "It is virtual, upright and the same size as the object, symmetrical with respect to the mirror." }
 ],
 "d": [
  { "type": "num", "q": "A converging lens has f = 12 cm. An object is placed 36 cm from the lens. At what distance (in cm) is the image formed?", "answer": 18, "unit": "cm", "explain": "1/q = 1/12 − 1/36 = 3/36 − 1/36 = 2/36, so q = 18 cm (G = −0.5)." },
  { "type": "num", "q": "A ray passes from air (n = 1) into a liquid with index n = 1.6 at an angle of 53.1° (sin 53.1° = 0.8). What is sin θ2?", "answer": 0.5, "tol": 0.01, "explain": "sin θ2 = 0.8/1.6 = 0.5, so θ2 = 30°." },
  { "type": "mc", "q": "A ray inside glass (n = 1.5) strikes the glass–air surface at an angle of 50°. What happens?", "options": ["It goes out into the air bending towards the normal", "Total internal reflection occurs", "It goes out without deviating"], "answer": 1, "explain": "The glass–air critical angle is arcsin(1/1.5) ≈ 41.8°. Since 50° is greater, there is no refracted ray: all the light is reflected." },
  { "type": "tf", "q": "A short-sighted person needs a lens with negative power in dioptres.", "answer": true, "explain": "Short-sightedness is corrected with diverging lenses, which have a negative focal length and therefore negative dioptres." },
  { "type": "mc", "q": "An object is placed between the vertex and the focus of a concave mirror. The image is…", "options": ["real, inverted and diminished", "virtual, upright and enlarged", "virtual, upright and diminished"], "answer": 1, "explain": "This is the shaving-mirror situation: if p < f, q turns out negative (virtual), and G = −q/p is positive and greater than 1." }
 ]
});
