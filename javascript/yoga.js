//Object of img's and posture types...

let basic = [

    {
        pose: 'childsPose',
        name: "Child's Pose",
        img: 'childsPose.jpg',
        type: ['Asana', 'Basic', 'Calming'],
        props: 'Blanket under knees(optional)',


        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'downwardFacingDog',
        name: 'Downward-Facing Dog',
        img: 'downWardFacingDog.jpg',
        type: ['Asana', 'Basic', 'Grounding', 'Flexibility', 'Strength', 'Legs', 'Back', 'Spine',],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'plankPose',
        name: 'Plank Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Energizing', 'Heat', 'Strength', 'Arms', 'Core',],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"

    },
    {
        pose: 'kneesChestChin',
        name: 'Knees Chest Chin',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Strength', 'Opens Chest'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'yogisPushUpPose',
        name: "Yogi's Push-Up Pose",
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Energizing', 'Strength', 'Arms', 'Core', 'Stomach'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'babyCobraPose',
        name: 'Baby Cobra Pose',
        img: 'cobra.jpg',
        type: ['Asana', 'Basic', 'Energizing', 'Strength', 'Opens Chest', 'Shoulders', 'Upper Back', 'Buttocks'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'upwardFacingDogPose',
        name: 'Upward-Facing Dog Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Energizing', 'Openness', 'Strength', 'Arms'],
        props: 'Blocks(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'mountainPose',
        name: 'Mountain Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Focus', 'Stability', 'Strength', 'Awarness'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },

    {
        pose: 'standingForwardBendPose',
        name: 'Standing Forward Bend Pose',
        img: 'standingForwardBend.jpg',
        type: ['Asana', 'Basic', 'Calming', 'Cleansing', 'Flexibility', 'Legs', 'Spine', 'Back'],
        props: 'Blocks(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'lowLungePose',
        name: 'Low Lunge Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Strength', 'Flexibility', 'Legs', 'Thighs'],
        props: 'Blocks(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'highLungePose',
        name: 'High Lunge Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Energizing', 'Flexibility', 'Strength', 'Thighs', 'Legs', 'Back', 'Hips'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'crescentMoonPose',
        name: 'Crescent Moon Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Energizing', 'Flexibility', 'Spine', 'Legs', 'Thighs', 'Hips'],
        props: 'Blanket(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'lizardLungePose',
        name: 'Lizard Lunge Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Basic', 'Grounding', 'Caliming', 'Flexibility', 'Hips', 'Thighs', 'Knees', 'Chest'],
        props: 'Blocks(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'powerfulPose',
        name: 'Powerful Pose',
        img: 'powerfulPose.jpg',
        type: ['Asana', 'Basic', 'Energizing', 'Heat', 'Strength', 'Thighs', 'Legs', 'Core', 'Stomach'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },

    {
        pose: 'WarriorIPose',
        name: 'Warrior I Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Basic', 'Asana', 'Grounding', 'Balance', 'Energy', 'Strength', 'Legs', 'Chest', 'Lungs'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'WarriorIIPose',
        name: 'Warrior II Pose',
        img: 'warrior2.jpg',
        type: ['Standing', 'Basic', 'Asana', 'Hips', 'Shoulders', 'Chest', 'Arms', 'Legs', 'Knees', 'Grounding', 'Energizing', 'Flexibility', 'Strength'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'WarriorIIIPose',
        name: 'Warrior III Pose',
        img: 'warriorThree.jpg',
        type: ['Standing', 'Basic', 'Asana', 'Hips', 'Shoulders', 'Chest', 'Arms', 'Legs', 'Knees', 'Grounding', 'Energizing', 'Flexibility', 'Strength'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },

    {
        pose: 'PeacefulWarriorPose',
        name: 'Peaceful Warrior Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Basic', 'Asana', 'Grounding', 'Energizing', 'Legs', 'Flexibility', 'Openess', 'Strength'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'warriorGoddessPose',
        name: 'Warrior Goddess Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Basic', 'Asana', 'Grounding', 'Energizing', 'Flexibility', 'Heat', 'Knees'],
        props: 'None',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'trianglePose',
        name: 'Triangle Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Basic', 'Asana', 'Hips', 'Thighs', 'Legs', 'Back', 'Neck'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'extendedSideAnglePose',
        name: 'Extended Side Angle Pose',
        img: 'ExtendedSideAngle.jpg',
        type: ['Standing', 'Asana', 'Grounding', 'FLexibility', 'Strength', 'Hips', 'Chest', 'Legs', 'Thighs', 'Back', 'Spine'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'halfMoonPose',
        name: 'Half Moon Pose',
        img: 'halfMoon.jpg',
        type: ['Standing', 'Asana', 'Leg', 'FLexibility', 'Focus', 'Strength', 'Balance', 'Back', 'Leg'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'wideLeggedForwardBend',
        name: 'Wide Legged Forward Bend',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Calming', 'Flexibility', 'Strength', 'Energizing', 'Spine', 'Shoulers', 'Hips'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'garlandPose',
        name: 'Garland Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Basic', 'Asana', 'Grounding', 'Flexibility', 'Stability', 'Hips', 'Knees', 'Thighs', 'Groins', 'Ankle', 'Back', 'Spine'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'pyramidPose',
        name: 'Pyramid Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Calming', 'Balancing', 'Flexibility', 'Strength'],
        props: 'Blocks(optinal)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    }, {
        pose: 'revolvedTrianglePose',
        name: 'Revolved Triangle Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Grounding', 'Energizing', 'Flexibility', 'Heat', 'Strength', 'Hamstrings', 'Spine', 'Shoulders'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },

    {
        pose: 'halfWheelPose',
        name: 'Half Wheel Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Backbend', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms', 'Tranquility'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'bowPose',
        name: 'Bow Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Backbend', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Flexibility', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'revolvedExtendedAnglePose',
        name: 'Revolved Extended Angle Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing',
            'Asana', 'Grounding', 'Energizing', 'Cleansing', 'Heat', 'Strength', 'Legs'],
        props: 'BLock(optinal)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?"
    },
    {
        pose: 'revolvedHalfMoonPose',
        name: 'Revolved Half Moon Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'locustPose',
        name: 'Locust Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Stimulation', 'Core', 'Stomache', 'Abs', 'Arms', 'Chest',],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'sideCrowPose',
        name: 'Side Crow Pose',
        img: 'sideCrow.jpg',
        type: ['Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'crowPose',
        name: 'Crow Pose',
        img: 'crowPose.jpg',
        type: ['Asana', 'Grounding', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'forearmPlankPose',
        name: 'Forearm Plank Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Grounding', 'Focus', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'sidePlankWithPose',
        name: 'Side Plank With Tree Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'sidePlankPose',
        name: 'Side Plank Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Core', 'Stomache', 'Abs', 'Arms'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'boatPose',
        name: 'Boat Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Core', 'Stomache', 'Abs',],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'revolvedHalfMoonPose',
        name: 'Revolved Half Moon Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'catCowPose',
        name: 'Cat-Cow Pose',
        img: 'catCow.jpg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'headStandPrep',
        name: 'Head Stand Prep',
        img: 'headStandPrep.jpg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',

        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'fullWheelPose',
        name: 'Full Wheel Pose',
        img: 'fullWheel.jpg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },

    {
        pose: 'fullForwardBendPOse',
        name: 'Full Forward Bend Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Asana', 'Grounding', 'Flexibility', 'Stability', 'Tranquility', 'Strength', 'Energizing', 'Back', 'Spine', 'Legs'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'kingPigeonPose',
        name: 'King Pigeon Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Backbend', 'Asana', 'Grounding', 'Flexibility', 'Stability', 'Tranquility', 'Strength', 'Energizing', 'Back', 'Spine', 'Legs', 'Arms',],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },


    {
        pose: 'threadTheNeedle',
        name: 'Thread The Needle Pose',
        img: 'threadTheNeedle.jpg',
        type: ['Backbend', 'Asana', 'Grounding', 'Flexibility', 'Stability', 'Tranquility', 'Strength', 'Energizing', 'Back', 'Spine', 'Legs', 'Arms',],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'standingSplitPose',
        name: 'Standing Split Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Energizing', 'Back', 'Spine', 'Arms',],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'dancersPose',
        name: "Dancer's Pose",
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'eaglePose',
        name: 'Eagle Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Standing', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'cleansingBreath',
        name: 'Cleansing Breath',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'alternateNostril',
        name: 'Alternate Nostril Breath',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'heroPose',
        name: 'Hero POse',
        img: 'heroPose.jpg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'tibetanSunSalutation',
        name: 'Tibetan Sun Salutation Pose',
        img: 'sunSalutation.jpg',
        type: ['Meditation', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'guiededMeditation',
        name: 'Guided Meditation Pose',
        img: 'yogaundersunlogopic.jpeg',
        type: ['Meditation', 'Asana', 'Grounding', 'Flexibility', 'Strength', 'Flexibility', 'Cleansing', 'Heat', 'Energizing', 'Shoulders', 'Openess', 'Hamstrings', 'Spine', 'Core', 'Stomache', 'Abs', 'Back'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    },
    {
        pose: 'simpleSupineBellyBreath',
        name: 'Simple Supine Belly Breath',
        img: 'simpleSupineBellyBreath.jpg',
        type: ['Meditation', 'Pranayama'],
        props: 'Block(optional)',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
        steps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea minus libero maxime modi fugit eos, ex, iure nihil quas eaque aut cupiditate nisi natus accusantium cumque nostrum dignissimos in?",
    }

]














