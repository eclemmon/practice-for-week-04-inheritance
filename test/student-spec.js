const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const Student = require("../classes/student");

describe("Student class", () => {
  let student1;

  beforeEach(() => {
    student1 = new Student("billy", "johnson", 24, "software-development", 3.2);
  });
  describe("Student constructor", () => {
    it("should set the firstName property", () => {
      expect(student1).to.have.property("firstName");
      expect(student1.firstName).to.eql("billy");
    });

    it("should set the lastName property", () => {
      expect(student1).to.have.property("lastName");
      expect(student1.lastName).to.eql("johnson");
    });

    it("should set the age property", () => {
      expect(student1).to.have.property('age');
      expect(student1.age).prototype.eql(24)
    })

    it("should set the major property", () => {
      expect(student1).to.have.property("major");
      expect(student1.major).to.eql("software-development");
    });

    it("should set the GPA property", () => {
      expect(student1).to.have.property("GPA");
      expect(student1.GPA).to.eql(3.2);
    });
  });

  describe("compareGPA static method", () => {
    it("should return the student with the highest GPA", () => {
      let student2 = new Student("sarah", "smith", 28, "basket-weaving", 3.7);
      expect(Student.compareGPA(student1, student2)).to.eql(
        "sarah smith has the higher GPA."
      );
    });
  });
});